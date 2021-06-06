import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-calorie-counter',
  templateUrl: './food-calorie-counter.component.html',
  styleUrls: ['./food-calorie-counter.component.css']
})
export class FoodCalorieCounterComponent implements OnInit {
  foodCalculatedCalories:number=0;
  foodCaloriesCounted=false;
  foodCalorieCounterForm:FormGroup;

 
  constructor(private fb:FormBuilder) { }

  get f()
  {
    return this.foodCalorieCounterForm.controls;
  }

  ngOnInit() { 
    this.foodCalorieCounterForm=this.fb.group({
      protien:['', Validators.required],
      carb:['', Validators.required],

      fat:['', Validators.required],

      sugar:['', Validators.required],


    })
   
  }

  calculateCalories()
  {
    
    this.foodCalculatedCalories=(this.f.protien.value * 4) + (this.f.carb.value*4)
    + (this.f.fat.value *9) + (this.f.sugar.value *4.2);
    this.foodCaloriesCounted=true;
    
  }
  restForm(){
    this.foodCaloriesCounted=false;
    this.foodCalorieCounterForm.reset();
  }

}
