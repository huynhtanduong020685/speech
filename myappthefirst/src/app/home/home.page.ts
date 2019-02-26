import { Component } from '@angular/core';
import { NavController,Platform } from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { ChangeDetectorRef } from '@angular/core';
import {  NgZone } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public  matches: String[]=['Result of speech Recording is showed here .'];
     // isRecording = false; 
    isRecording: boolean = false;


  constructor(
    public navCtrl: NavController, 
    private speechRecognition: SpeechRecognition, 
    private plt: Platform, 
    private cd: ChangeDetectorRef,
    private zone: NgZone) { }
  

  async hasPermission():Promise<boolean> {
        try {
          const permission = await this.speechRecognition.hasPermission();
          console.log(permission);

          return permission;
        } catch(e) {
          console.log(e);
        }
    }

   async getPermission():Promise<void> {
      try {
        this.speechRecognition.requestPermission();
      } catch(e) {
        console.log(e);
      }
    }
    //stop recording
  stopListening() {
      this.speechRecognition.stopListening().then(() => {
        this.isRecording = false;
      });
  }
  //START RECORDING 
  // startListening() {
  //   this.matches =[];
  //   let options = {
  //       language: 'en-US'
  //     }
  //   // Start the recognition process
  //     this.speechRecognition.startListening(options).subscribe(matches => {
  //       this.matches = matches;
  //       this.cd.detectChanges();
  //     });
  //     this.isRecording = true;
  // }

  startListening(): void {
    this.matches =[];
    
    let options = {
        language: 'en-US'
      }
      console.log('listen action triggered');
      if (this.isRecording) {
        this.speechRecognition.stopListening();
        this.toggleListenMode();
        return;
      }
      this.toggleListenMode();
      let _this = this;
      
      this.speechRecognition.startListening(options)
        .subscribe(matches => {
          _this.zone.run(() => {
            _this.matches = matches;
            this.cd.detectChanges();
          })
        }, error => console.error(error));

     }
    toggleListenMode():void {
      this.isRecording = this.isRecording ? false : true;
      console.log('listening mode is now : ' + this.isRecording);
  }


}
