import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  formGroup: FormGroup;
  timer = 0;

  types: any[] = [
    { id: 'radio', value: 'Radio'},
    { id: 'select', value: 'Select'},
  ];


  constructor(
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.createForm();

  }
  initQuestion() {
    return new FormGroup({
      type: new FormControl('radio'),
      label: new FormControl(),
      timer: new FormControl(),
      required: new FormControl(),
      values: new FormArray([
        this. initValues()
      ])
    });
  }
  initValues() {
    return new FormGroup({
      option: new FormControl()
    });
  }
  createForm() {
    this.formGroup = this.fb.group({
      questions: new FormArray([
        this.initQuestion()
      ])
    });
  }

  getQuestions(form){
    return form.controls.questions.controls;
  }

  getType(i) {
    const form =  this.formGroup.get(['questions', i, 'type']) as FormControl;
    return form.value;
  }

  getOptions(form) {
    return form.controls.values.controls;
  }

  addQuestion() {
    const control = this.formGroup.get('questions') as FormArray;
    control.push(this.initQuestion());
  }

  addValues(i) {
    const row = this.formGroup.get(['questions', i, 'values']) as FormArray;
    row.push(this.initValues());
  }

  removeQuestion(index) {
    const row = this.formGroup.get('questions') as FormArray;
    row.removeAt(index);
  }


  submit() {
    localStorage.setItem('questions', JSON.stringify(this.formGroup.value));
  }

}
