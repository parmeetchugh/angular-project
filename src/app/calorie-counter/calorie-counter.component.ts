import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-calorie-counter',
  templateUrl: './calorie-counter.component.html',
  styleUrls: ['./calorie-counter.component.css']
})
export class CalorieCounterComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mzbkojqp',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            alert("Response recorded! Expect your reply within 24 hours.");
            contactForm.reset();
          }
        );
    }
    else{
      alert("Please Check your email or provided details are not correct!");
    }
  }



}
