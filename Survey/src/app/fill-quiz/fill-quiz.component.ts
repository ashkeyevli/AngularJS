import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {Question, Values} from "../models";

@Component({
  selector: 'app-fill-quiz',
  templateUrl: './fill-quiz.component.html',
  styleUrls: ['./fill-quiz.component.scss']
})
export class FillQuizComponent implements OnInit {
  @Input()data: any;
  formView: FormGroup;
  fields: any[] = [];
  showResponse = false;
  interval;
  timeleft;
  isTime: boolean = false;


  constructor() { }


  ngOnInit(): void {
    if (this.data){
      this.fields = this.data.questions.filter(Boolean);
      this.createForm(this.fields);
  }
  }
  createForm(fields) {
    const group = {};
    fields.forEach((field, i) => {

        if (field.required === true) {
          group[i] = new FormControl('', Validators.required);
        } else {
          group[i] = new FormControl('');
        }
    });
    this.formView = new FormGroup(group);
  }

  getResponse(e: MatCheckboxChange) {
    this.showResponse = !this.showResponse;
  }
  init(tt: string){
   this.timeleft = parseFloat(tt);
   this.isTime = true
   this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeleft > 0) {
        this.timeleft--;
      } else {
        this.isTime = false;

      }
    }, 1300);
  }



}
