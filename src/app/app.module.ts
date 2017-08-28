import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {emoticonComponent} from './emoticon/emoticon.component';
import { RandomFaceComponentComponent } from './random-face-component/random-face-component.component';


@NgModule({
  declarations: [
    AppComponent,
    emoticonComponent,
    RandomFaceComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
