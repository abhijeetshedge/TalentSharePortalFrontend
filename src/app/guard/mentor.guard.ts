import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/auth.service';


 

@Injectable({
  providedIn: 'root',
})
export class mentorGuard implements CanActivate {
  constructor(private Auth:AuthService, private router:Router){
    // //console.log(this.Auth.ISloggedIn());
  }
  canActivate(){
  if (this.Auth.MentorIsLoggedIn()){
  return true;
  }

  Swal.fire({
    icon: 'error',
    title: 'Sorry...',
    text: 'Please log in first!',
  });

  this.router.navigate(['login']);

  return false;

}

}
