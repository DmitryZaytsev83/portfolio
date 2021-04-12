import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactData, ContactFormService} from '../../services/contact-form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;

  constructor(private contactFormService: ContactFormService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.email
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ])
    });
  }

  submitForm(): void {
    const formData: ContactData = {...this.form.value};
    this.contactFormService.sendFormData(formData).subscribe(response => {
      console.log(response);
    });
    this.form.reset();
  }
}
