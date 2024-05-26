import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RegisterUser } from '../../../Models/registerModel';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  RegisterForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue]
  },
  );
  validateConfirmPassword(control: AbstractControl): ValidationErrors | null {
    return control.value !== this.RegisterForm.get('password')?.value
      ? { wrongConfirmedPassword: { value: control.value } }
      : null;
  }

  constructor(private fb: FormBuilder, public UsersService: UsersService) { }

  onSubmit(): void {
    console.log(this.RegisterForm.value);
    if (this.RegisterForm.valid) {
      const { firstName, lastName, email, password } = this.RegisterForm.value;
      const registerData = new RegisterUser(
        firstName as string,
        lastName as string,
        email as string,
        password as string);
      console.log(registerData);

      this.UsersService.addUser(registerData);
    }

  }


}
