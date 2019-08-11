import {Component, OnInit} from '@angular/core';
import {Course} from '../../../Models/courses';

@Component({
  selector: 'app-course-payment',
  templateUrl: './course-payment.component.html',
  styleUrls: ['./course-payment.component.css']
})
export class CoursePaymentComponent implements OnInit {

  constructor() {
  }
  courses = Object.values(Course.CourseView());

  step = 0;
  start = 0;

  ngOnInit() {

    console.log(this.courses);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}