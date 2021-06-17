import { Injectable } from '@angular/core';
import { Blog, IBlog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {

  constructor() { }

  getLatest(categoryId?: string, countPerPage: number = 4): Promise<Blog[]> {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        const data: IBlog[] = [];
        for(let i=0; i<countPerPage; i++) {
          data.push(postDummy);
        }
  
        const latest = [];
        data.forEach(d => {
          latest.push(new Blog(d));
        });

        resolve(latest);

      }, 1000);  
    })
  }
}

const postDummy: IBlog = {
  _id: 'asdfaserfaser',
  categoryId: 'cafeafacserfsedr',
  createdAt: 'Apr 22, 2021',
  description: 
    `<div>
   <h2>What is Lorem Ipsum?</h2>
   <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   </div>`,
   image: 'https://www.typingpal.com/images/6/5/9/d/4/659d48c66b86704dd9890e1a374337013fdc755e-lorem-ipsum1x.png',
   slug: 'this-is-test-slug',
   title: '4 surprising health benefits of a home cooked meal',
 }
