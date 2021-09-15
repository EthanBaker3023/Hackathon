
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-Button',
  templateUrl: './Button.component.html',
  styleUrls: ['./Button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() buttonId: number | null = null;
  @Output() selectedEvent = new EventEmitter<number>();

  ngOnInit() {
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
