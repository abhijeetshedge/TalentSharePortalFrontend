import { Component } from '@angular/core';
import{Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){

  }

  signUp(): void {
  if (this.router.url == '/login/mentee-login') { 
    console.log('calling Mentee Registration')
    this.router.navigate(['registerMentee'])
  }else if (this.router.url == '/login/mentor-login') {
    console.log('calling Mentor Registration')
    this.router.navigate(['mentor-registration']);
  }else{
    Swal.fire('Error', 'Please Select Mentee or Mentor', 'error');
  }
}

}
