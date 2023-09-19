import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenteeService } from 'src/app/services/mentee.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  

  constructor(
    private menteeService: MenteeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registerform = this.formBuilder.group({
      employeeId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ]
      ],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.registerform.valid) {
      this.menteeService.signup(this.registerform.value).subscribe(
        response => {
          console.log("Signup successful");
          Swal.fire('success', 'Register Successfully', 'success').then(() => {
            this.router.navigate(['/login']);
          });
        },
        error => {
          console.log("Signup error:", error);
          Swal.fire('error', error.error.message, 'error');
        }
      );
    } else {
      if (this.registerform.get('employeeId')?.hasError('required')) {
        Swal.fire('error', 'Employee ID is required.', 'error');
      } else if (this.registerform.get('firstName')?.hasError('required')) {
        Swal.fire('error', 'First name is required.', 'error');
      } else if (this.registerform.get('lastName')?.hasError('required')) {
        Swal.fire('error', 'Last name is required.', 'error');
      } else if (this.registerform.get('email')?.hasError('required')) {
        Swal.fire('error', 'Email is required.', 'error');
      } else if (this.registerform.get('email')?.hasError('email')) {
        Swal.fire('error', 'Invalid email format.', 'error');
      } else if (this.registerform.get('password')?.hasError('required')) {
        Swal.fire('error', 'Password is required.', 'error');
      } else if (this.registerform.get('password')?.hasError('minlength')) {
        Swal.fire('error', 'Password must be at least 6 characters long.', 'error');
      } else if (this.registerform.get('password')?.hasError('pattern')) {
        Swal.fire('error', 'Password must contain at least one lowercase letter, one uppercase letter, and one digit.', 'error');
      } else if (this.registerform.hasError('passwordMismatch')) {
        Swal.fire('error', 'Passwords do not match.', 'error');
      }
    }
  }
}
