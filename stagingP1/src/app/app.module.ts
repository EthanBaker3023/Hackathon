import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameprocessComponent } from './gameprocess/gameprocess.component';
import { ButtonComponent } from './Button/Button.component';

@NgModule({
  declarations: [	
    AppComponent,
    GameprocessComponent,
    ButtonComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
