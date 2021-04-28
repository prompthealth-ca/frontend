import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  private personalMatch: QuestionnairesPersonalMatch;
  private profileService: QuestionnairesProfileService;

  constructor(
    private http: HttpClient,
  ) { }

  /** get questionnaire for myService tab in profileManagement */
  getProfileService(role: RoleType): Promise<QuestionnairesProfileService> {
    return new Promise( async (resolve, reject) => {
      if(this.profileService) {
        resolve(this.profileService);
      }else{
        try {
          const qs = await this.getQuestionnaires(role);
          const data: QuestionnairesProfileService = {customerHealth: null, treatmentModality: null, typeOfProvider: null};
          for (const q of qs) {
            let isSet = false;
            switch(q.slug){
              case 'who-are-your-customers':
                data.customerHealth = q;
                isSet = true;
                break;
              case 'treatment-modalities':
                data.treatmentModality = q;
                isSet = true;
                break;
              case 'providers-are-you':
                data.typeOfProvider = q;
                break;
            }

            if(isSet){
              for (const a of q.answers) {
                if(a.subans) {
                  const subAns = await this.getSubAnswers(a._id);
                  a.subansData = subAns;
                }
              }  
            }
          }
          this.profileService = data;
          resolve(data)
        }catch(err){
          reject(err);
        }
      }
    })
  }

  getPersonalMatch(): Promise<QuestionnairesPersonalMatch> {
    return new Promise( async (resolve, reject) => {
      if(this.personalMatch) {
        resolve(this.personalMatch);
      }else{
        try {
          const qs = await this.getQuestionnaires();
          const data: QuestionnairesPersonalMatch = {gender: null, spGender: null, health: null}
          qs.forEach(q => {
            switch(q.question_type){
              case 'health':
              case 'spGender':
              case 'gender':
                data[q.question_type] = q;
                q.answers.forEach(async a => {
                  if(a.subans){
                    const subAns = await this.getSubAnswers(a._id);
                    a.subansData = subAns;
                  }
                });
                break;
            }
          });
          this.personalMatch = data;
          resolve(this.personalMatch);
        }catch(err){
          reject(err);
        }
      }
    });
  }

  getQuestionnaires(type: RoleType = 'U', filter: QuestionnaireFilter = null): Promise<Questionnaire[]> {
    return new Promise((resolve, reject) => {
      let path = `questionare/get-questions?type=${type}`;
      if(filter){
        path = path + '&filter=' + filter;
      }
      this.getNoAuth(path).subscribe((res: any) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else { 
          reject(res.message); 
        }
      }, (err: any) => {
        console.log(err);
        reject(err);
      });
    });
  }

  getSubAnswers(parentId: string): Promise<QuestionnaireAnswer[]> {
    return new Promise((resolve, reject) => {
      const path = `questionare/get-answer/${parentId}`;
      this.getNoAuth(path).subscribe((res: any) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else { 
          reject(res.message); 
        }
      }, (err: any) => {
        console.log(err);
        reject(err);
      });
    });
  }

  getNoAuth(path: string) {
    const headers = new HttpHeaders()
    .set('Authorization', localStorage.getItem('token'))
    .set('Content-Type', 'application/json');

    return this.http.get(environment.config.API_URL + path, {headers});
  }
}

type QuestionnaireFilter = 'health' | 'gender' | 'age' | 'goal';
type RoleType = 'U' | 'SP' | 'C';

export interface QuestionnaireAnswer {
  _id: string;
  item_text: string;
  active?: boolean;
  subans?: boolean;
  subansData?: QuestionnaireAnswer[];
}

export interface Questionnaire {
  _id: string;
  answers: QuestionnaireAnswer[];
  slug: string;
  question_type?: string;
  c_question: string;
}


type QuestionnairesPersonalMatch = {
  gender: Questionnaire, /** customer gender */
  spGender: Questionnaire, /** prefered gender to see */
  health: Questionnaire, /** customer_health */
  //service: it's not set here. it will be set in formItemService individually using categoryService.
}


export type QuestionnairesProfileService = {
  typeOfProvider: Questionnaire,
  treatmentModality: Questionnaire,
  customerHealth: Questionnaire,
  //service: it's not set here. it will be set in formItemService individually using categoryService.
}