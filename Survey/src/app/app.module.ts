import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import { FillQuizComponent } from './fill-quiz/fill-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuizComponent,
    FillQuizComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CustomMaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
