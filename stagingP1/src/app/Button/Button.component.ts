import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { soundMap } from '../model/soundMapper';
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
  classList: string | undefined;

  constructor() { }

  @Input() buttonId: number | null = null;
  @Output() selectedEvent = new EventEmitter<number>();
  audioPath: string = soundMap[1];

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
    let button = document.querySelector("#button1");
    audio.play();
    setTimeout(() => { this.classList = ""; audio.pause(); audio.currentTime = 0; }, 1000);
    this.classList = "select-b1";
    //button?.addEventListener('animationend', () => {
      //button?.classList.toggle('select-b1');
    //});
    //button?.classList.toggle("select-b1");

    console.log(button);
    if (audio) {

    }
    if (this.buttonId) {
      this.selectedEvent.emit(this.buttonId)
    }
  }
}
