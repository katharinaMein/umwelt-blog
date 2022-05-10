import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-blog-edit-validation',
  templateUrl: './blog-edit-validation.component.html',
  styleUrls: ['./blog-edit-validation.component.less']
})
export class BlogEditValidationComponent implements OnInit {
  @Output() passwordForValidation = new EventEmitter<string>();
  @ViewChild('validationForm') validationForm!: NgForm;
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitValidationForm(){
    this.passwordForValidation.emit(this.password);
    this.validationForm.reset();
  }
}
