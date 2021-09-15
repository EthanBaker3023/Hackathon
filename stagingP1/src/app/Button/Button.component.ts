<<<<<<< HEAD
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
=======
>>>>>>> 5d96667558c211f73565111e102de0e836693153

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
    //this.style = this.color;
  }

  select() {
    let audio = <HTMLVideoElement>document.querySelector("#sound1");
    console.log(audio);
    if (audio) {
      audio.play();
    }
    if (this.buttonId) {
      this.selectedEvent.emit(this.buttonId)
    }
  }
}
