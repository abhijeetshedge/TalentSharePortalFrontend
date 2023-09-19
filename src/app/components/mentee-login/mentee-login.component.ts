import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenteeService } from 'src/app/services/mentee.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mentee-login',
  templateUrl: './mentee-login.component.html',
  styleUrls: ['./mentee-login.component.css']
})
export class MenteeLoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private menteeService: MenteeService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {

    if (this.router.url == '/login') { 
      Swal.fire('error', 'Please Select Mentee or Mentor', 'error');
    }
    else if(this.loginForm.valid) {
      this.menteeService.login(this.loginForm.get('employeeId')?.value, this.loginForm.get('password')?.value).subscribe(
        (response) => {
          // Handle successful login here
          console.log('Login successful', response);
          Swal.fire('success', 'Login Successfully', 'success').then(() => {
            this.router.navigate(['/mentor/search']);
            sessionStorage.setItem('menteeId', this.loginForm.get('employeeId')?.value )
          });
        },
        (error) => {
          // Handle login error here
          console.error('Login failed', error);
          Swal.fire('error', error.error.message, 'error');
        }
      );
    }else{
      if (this.loginForm.get('employeeId')?.hasError('required')) {
        Swal.fire('error', 'Employee ID is required.', 'error');
      }else if (this.loginForm.get('password')?.hasError('required')) {
        Swal.fire('error', 'Password is required.', 'error');
      }
    }
  }
}

