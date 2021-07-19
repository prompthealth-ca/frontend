import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { SharedService } from 'src/app/shared/services/shared.service';
import { validators } from 'src/app/_helpers/form-settings';
import * as RecordRTC from 'recordrtc';


@Component({
  selector: 'card-new-post',
  templateUrl: './card-new-post.component.html',
  styleUrls: ['./card-new-post.component.scss']
})
export class CardNewPostComponent implements OnInit {

  get f() { return this.form.controls; }

  public isMoreShown: boolean = false;
  public imagePreview: string | ArrayBuffer;

  public isVoiceRecording: boolean = false;
  public recorder: any;
  public url: string;

  private form: FormGroup;
  @ViewChild('inputMedia') private inputMedia: ElementRef;
  @ViewChild('modalVoiceRecorder') private modalVoiceRecorder: ModalComponent;

  constructor(
    private _sharedService: SharedService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      description: new FormControl('', validators.publishPostDescription),
      authorId: new FormControl(null, validators.savePostAuthorId),
      media: new FormControl(),
    });
  }

  onClickButtonMedia() {
    const el = this.inputMedia.nativeElement as HTMLInputElement;
    if(el && !this.imagePreview) {
      el.click();
    }
  }

  async onSelectMedia(e: Event) {
    const files = (e.target as HTMLInputElement).files;
    if(files && files.length > 0){

      let image: {file: File | Blob, filename: string};

      try { 
        image = await this._sharedService.shrinkImageByFixedWidth(files[0], 800);
        this.f.media.setValue(image.file);
        const reader = new FileReader();
        reader.readAsDataURL(image.file);
        reader.onloadend = () => {
          this.imagePreview = reader.result;
        }
      } catch(err){
        this.f.media.setValue('');
        return;
      }
    }
  }

  onClickButtonRemoveMedia() {
    this.imagePreview = null;
    this.f.media.setValue('');
  }

  onClickButtonVoice() {
    this._router.navigate(['./'], {relativeTo: this._route, queryParams: {modal: 'voice-recorder'}});
  }

  cancelVoiceRecord() {
    this.modalVoiceRecorder.goBack();
  }

  // onClickButtonEvent() {
  //   this._router.navigate(['./'], {relativeTo: this._route, queryParams: {modal: 'new-event'}})
  // }

  // onClickButtonArticle() {
  //   this._router.navigate(['./'], {relativeTo: this._route, queryParams: {modal: 'new-article'}});
  // }

  onClickButtonMore() {
    this.isMoreShown = !this.isMoreShown;
  }

  async toggleRecordingState() {
    const stateNext = this.isVoiceRecording ? 'stop' : 'start';
    if(!this.recorder) {
      try {
        await this.initRecorder(); 
      } catch (error) {
        console.log(error);
        return;
      }
    }

    if(stateNext == 'start') {
      this.recorder.record();
      this.isVoiceRecording = true;
    } else {
      this.recorder.stop(this.processRecording.bind(this));
      this.isVoiceRecording = false;
    }
  }

  initRecorder(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true
      }).then(
        (stream) => {
          const options = {
            mimeType: "audio/wav",
            numberOfAudioChannels: 1,
            sampleRate: 16000,
          };
          const StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
          this.recorder = new StereoAudioRecorder(stream, options);
          resolve(true);
        }, 
        (error) => {
          console.log('cannot init recorder');
          reject(error);
        }
      );
    });
  }

  processRecording(blob) {
    this.url = URL.createObjectURL(blob);
  }


  getUserMedia() {
  }
}
