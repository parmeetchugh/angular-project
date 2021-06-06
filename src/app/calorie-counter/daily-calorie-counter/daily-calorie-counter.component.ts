import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-daily-calorie-counter',
  templateUrl: './daily-calorie-counter.component.html',
  styleUrls: ['./daily-calorie-counter.component.css']
})
export class DailyCalorieCounterComponent implements OnInit {

  dailyCalorieCounterForm:FormGroup;
  dailyCalculatedCalories:number=0;
  dailyCaloriesCounted=false;

  constructor(private fb:FormBuilder) { }


  ngOnInit() {
    this.dailyCalorieCounterForm=this.fb.group({
      age:['', Validators.required],
      gender:['', Validators.required],
      height:['', Validators.required],

      weight:['', Validators.required], 
    })
  }
  calculateCalories(){}
  restForm(){

  }

}
