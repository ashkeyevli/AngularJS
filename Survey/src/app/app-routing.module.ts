import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FillQuizComponent} from './fill-quiz/fill-quiz.component';
import {CreateQuizComponent} from './create-quiz/create-quiz.component';

const routes: Routes = [
  {path: '', component: CreateQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
