import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-Button',
  templateUrl: './Button.component.html',
  styleUrls: ['./Button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()
  color!: string;

  isActive!: boolean;
  style: string | undefined;

  constructor() { }

  @Input() buttonId: number | null = null;
  @Output() selectedEvent = new EventEmitter<number>();

  ngOnInit() {
    this.style = this.color;
  }

  blink()
  {
    this.style = "white";
    setTimeout(() => this.style = this.color, 200);
    //this.select();
    if (this.buttonId) {
      this.selectedEvent.emit(this.buttonId)
    }
    //wait for input that this is the proper button
    //Play appropriate sound based on input
    //playSound plays button sound
    //playFail plays failure sound
  }

  playSound()
  {
    let audio = new Audio();

    switch(this.color)
    {
      case "red" : {
        audio.src = "/assets/sound/a.mp3";
        console.log("a.mp3 playing");
      if (audio) {
        audio.play();
      }
      if (this.buttonId) {
        this.selectedEvent.emit(this.buttonId)
      }
      break;
      }
      case "blue" : {
        audio.src = "/assets/sound/b.mp3";
        console.log("b.mp3 playing");
      if (audio) {
        audio.play();
      }
      if (this.buttonId) {
        this.selectedEvent.emit(this.buttonId)
      }
      break;
      }
      case "yellow" : {
        audio.src = "/assets/sound/c.mp3";
        console.log("c.mp3 playing");
      if (audio) {
        audio.play();
      }
      if (this.buttonId) {
        this.selectedEvent.emit(this.buttonId)
      }
      break;
      }
      case "green" : {
        audio.src = "/assets/sound/d.mp3";
        console.log("d.mp3 playing");
      if (audio) {
        audio.play();
      }
      if (this.buttonId) {
        this.selectedEvent.emit(this.buttonId)
      }
      break;
      }
    }
  }

  playFail()
  {
    let audio = new Audio();
    audio.src = "/assets/sound/fail.mp3";
    console.log("fail.mp3 playing");
    if (audio) {
      audio.play();
    }
  }

  select() {
    let audio = new Audio();

    switch(this.color)
    {
      case "red" : {
        audio.src = "/assets/sound/a.mp3";
        console.log("a.mp3 playing");
      if (audio) {
        audio.play();
      }
      if (this.buttonId) {
        this.selectedEvent.emit(this.buttonId)
      }
      break;
      }
      case "blue" : {
        audio.src = "/assets/sound/b.mp3";
        console.log("b.mp3 playing");
      if (audio) {
        audio.play();
      }
      if (this.buttonId) {
        this.selectedEvent.emit(this.buttonId)
      }
      break;
      }
      case "yellow" : {
        audio.src = "/assets/sound/c.mp3";
        console.log("c.mp3 playing");
      if (audio) {
        audio.play();
      }
      if (this.buttonId) {
        this.selectedEvent.emit(this.buttonId)
      }
      break;
      }
      case "green" : {
        audio.src = "/assets/sound/d.mp3";
        console.log("d.mp3 playing");
      if (audio) {
        audio.play();
      }
      if (this.buttonId) {
        this.selectedEvent.emit(this.buttonId)
      }
      break;
      }
      default : {
        audio.src = "/assets/sound/fail.mp3";
        console.log("fail.mp3 playing");
      if (audio) {
        audio.play();
      }
      if (this.buttonId) {
        this.selectedEvent.emit(this.buttonId)
      }
      break;
      }
    }
  }
}
