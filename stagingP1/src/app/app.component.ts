import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stagingP1';

  random?: number; //number to be passed to light up buttons
  gameOver: boolean = false;
  gameStart: boolean = false;
  userTurn: boolean = false;
  simonSequence: number[] = []; //sequence of numbers that simon said
  userSpot: number = 0;

  style1: string | undefined;
  style2: string | undefined;
  style3: string | undefined;
  style4: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.style1 = "red";
    this.style2 = "blue";
    this.style3 = "green";
    this.style4 = "yellow";
  }

  //initializes variables and runs functions necessary for game
  startGame() {
    this.simonSequence = [];
    this.gameOver = false;
    this.gameStart = true;
    this.SimonAdd();
    this.SimonSays();
 
  }

  // adds a random number to simon sequence array,
  SimonAdd() {
    var x = Math.floor(Math.random() * 4) + 1;
    this.simonSequence?.push(x);
    console.log(this.simonSequence)
  }

  // loops over the array assigning each element to this.random for 1 second (this.random will correspond with a button lighting up)
  SimonSays(){
    let count = 0;
    let say = setInterval(() => {
      this.random = this.simonSequence[count];
      this.blinkPattern()
      console.log(this.random);
      count++;
      if(this.simonSequence[count] == undefined){
        clearInterval(say);
      }
    },500)
    setTimeout(() => this.userTurn = true, 500 * (this.simonSequence.length + 1));
  }

  blink(temp: number)
  {
    let audio = new Audio();
    console.log("number " + this.simonSequence[this.userSpot]);
    switch(temp)
    {
      case 1 : {
        this.style1 = "white";
        setTimeout(() => this.style1 = "red", 200);
        if(temp == this.simonSequence[this.userSpot])
        {
          audio.src = "/assets/sound/a.mp3";
          console.log("a.mp3 playing");
          this.userSpot++;
        } else {
          audio.src = "/assets/sound/fail.mp3";
          console.log("fail.mp3 playing");
          this.simonSequence = [];
          this.gameOver = true;
          setTimeout(() => this.gameOver = false, 1000);
        }
        if (audio) {
          audio.play();
        }
        break;
      }
      case 2: {
        this.style2 = "white";
        setTimeout(() => this.style2 = "blue", 200);

        if(temp == this.simonSequence[this.userSpot])
        {
          audio.src = "/assets/sound/b.mp3";
          console.log("b.mp3 playing");
          this.userSpot++;
        } else {
          audio.src = "/assets/sound/fail.mp3";
          console.log("fail.mp3 playing");
          this.simonSequence = [];
          this.gameOver = true;
          setTimeout(() => this.gameOver = false, 1000);
        }
        if (audio) {
          audio.play();
        }
      break;
      }
      case 3 : {
        this.style3 = "white";
        setTimeout(() => this.style3 = "green", 200);

        if(temp == this.simonSequence[this.userSpot])
        {
          audio.src = "/assets/sound/c.mp3";
          console.log("c.mp3 playing");
          this.userSpot++;
        } else {
          audio.src = "/assets/sound/fail.mp3";
          console.log("fail.mp3 playing");
          this.simonSequence = [];
          this.gameOver = true;
          setTimeout(() => this.gameOver = false, 1000);
        }
        if (audio) {
          audio.play();
        }
      break;
      }
      case 4 : {
        this.style4 = "white";
        setTimeout(() => this.style4 = "yellow", 200);

        if(temp == this.simonSequence[this.userSpot])
        {
          audio.src = "/assets/sound/d.mp3";
          console.log("d.mp3 playing");
          this.userSpot++;
        } else {
          audio.src = "/assets/sound/fail.mp3";
          console.log("fail.mp3 playing");
          this.simonSequence = [];
          this.gameOver = true;
          setTimeout(() => this.gameOver = false, 1000);
        }
        if (audio) {
          audio.play();
        }
        break;
      }
    }
    if(this.userSpot >= this.simonSequence.length)
    {
      console.log("Adding another");
      this.userSpot = 0;
      this.userTurn = false;
      this.SimonAdd();
      setTimeout(() => this.SimonSays(), 1000);
    }
  }

  blinkPattern()
  {
    let audio = new Audio();

    switch(this.random)
    {
      case 1 : {
        this.style1 = "white";
        setTimeout(() => this.style1 = "red", 200);
        audio.src = "/assets/sound/a.mp3";
        console.log("a.mp3 playing");
      if (audio) {
        audio.play();
      }
        break;
      }
      case 2: {
        this.style2 = "white";
        setTimeout(() => this.style2 = "blue", 200);
        audio.src = "/assets/sound/b.mp3";
        console.log("b.mp3 playing");
      if (audio) {
        audio.play();
      }
      break;
      }
      case 3 : {
        this.style3 = "white";
        setTimeout(() => this.style3 = "green", 200);
        audio.src = "/assets/sound/c.mp3";
        console.log("c.mp3 playing");
      if (audio) {
        audio.play();
      }
      break;
      }
      case 4 : {
        this.style4 = "white";
        setTimeout(() => this.style4 = "yellow", 200);
        audio.src = "/assets/sound/d.mp3";
        console.log("d.mp3 playing");
      if (audio) {
        audio.play();
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
}

