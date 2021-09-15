import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-gameprocess',
  templateUrl: './gameprocess.component.html',
  styleUrls: ['./gameprocess.component.css']
})
export class GameprocessComponent implements OnInit {

    score = 0;
    @Output() random?: number; //number to be passed to light up buttons
    gameOver: boolean = false;
    gameStart: boolean = false;
    simonSequence?: number[]; //sequence of numbers that simon said
    userSequence?: number[];
    @Input()  userChoice?: number; //number from the button the user pressed
  
  constructor() { }

  ngOnInit(): void {
  }


  //initializes variables and runs functions necessary for game
  startGame() {
    this.score = 0;
    this.simonSequence = [];
    this.userSequence = [];
    this.gameOver = false;
    this.gameStart = true;
    while(this.gameOver == false){
      this.SimonAdd();
      this.SimonSays();
      //TODO: add something to display to user that it is there turn
      this.UserTurn();
      if(this.simonSequence.length == 3){ //just for testing
        this.gameOver = true;
      }
    }
  }

  // adds a random number to simon sequence array,
  SimonAdd(){
    var x = Math.floor(Math.random() * 4) + 1;
    this.simonSequence?.push(x);
    console.log(this.simonSequence)
  }

  //  loops over the array assigning each element to this.random for 1 second (this.random will correspond with a button lighting up)
  SimonSays() {
    let count = 0;
    this.simonSequence?.forEach(element => {
      let say = setInterval(() => {
        this.random = element;
        console.log(this.random);
        count++;
        if(this.simonSequence?.length == count){
          count = 0;
          clearInterval(say);
        }
      },1000)
    })
  }
  
  UserTurn(){
    // for(let i = 0; i <= this.simonSequence?.length; i++){
    //   var test = this.TestHit(this.userChoice, this.simonSequence?[i]);
    //   if(test == false){
    //     this.gameOver = true;
    //     break;
    //   }
    // }
  }

  //tests if user choice is the same as what simon said, if not returns false
  TestHit (user?: number, simon?: number){
    if(user != simon){
      return false;
    }
    return true;
  }

}
