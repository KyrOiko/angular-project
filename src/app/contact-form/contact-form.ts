import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LabeledInputField } from '../components/labeled-input-field/labeled-input-field';

@Component({
  selector: 'app-contact-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    LabeledInputField,
    MatDivider,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  profileForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      // validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      // validators: [Validators.required, Validators.email],
    }),
    city: new FormControl('', {
      nonNullable: true,
      //validators: [Validators.required],
    }),
    address: new FormControl('', {
      nonNullable: true,
      //validators: [Validators.required],
    }),
    postalCode: new FormControl('', {
      nonNullable: true,
      //validators: [Validators.required],
    }),
    message: new FormControl('', {
      nonNullable: true,
      // validators: [Validators.required, Validators.minLength(10)],
    }),
  });

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Form submitted:', this.profileForm.value);
      // Here you would typically send the data to your backend
      alert('Message sent successfully!');
      this.profileForm.reset();
    } else {
      console.log('Form is invalid:', this.profileForm.errors);
      // Mark all fields as touched to show validation errors
      this.profileForm.markAllAsTouched();
    }
  }
}
