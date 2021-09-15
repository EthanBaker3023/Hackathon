import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

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

  ngOnInit() {
    this.style = this.color;
  }

  blink()
  {
    this.style = "white";
    setTimeout(() => this.style = this.color, 200);
    //this.style = this.color;
  }

}
