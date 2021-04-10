import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ])
    });
  }

  submitForm(): void {
    const formData = {...this.form.value};
    console.log(formData);
    // this.schoolFormService.sendFormData(formData).subscribe(response => {
    //   console.log(response);
    // });
    this.form.reset();
  }
}
