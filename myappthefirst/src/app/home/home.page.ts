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

      stopListening() {
          this.speechRecognition.stopListening().then(() => {
          this.isRecording = false;
            });
      }
     
      getPermission() {
          this.speechRecognition.hasPermission()
            .then((hasPermission: boolean) => {
              if (!hasPermission) {
                this.speechRecognition.requestPermission();
              }
            });
      }
     
      startListening() {
        let options = {
          language: 'en-US'
        }
        this.speechRecognition.startListening().subscribe(matches => {
          this.matches = matches;
          this.cd.detectChanges();
        });
        this.isRecording = true;
      }
     
}
        
