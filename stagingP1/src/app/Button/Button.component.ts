import { Component, Input, OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'stream';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Button',
  templateUrl: './Button.component.html',
  styleUrls: ['./Button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() buttonId? = null;
  @Output() selectedEvent = new EventEmitter();

  ngOnInit() {
  }

  select() {
    if (this.buttonId) {
      this.selectedEvent.emit(this.buttonId)
    }
  }
}
