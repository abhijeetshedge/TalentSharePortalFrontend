import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  MenteeIsLoggedIn(){
    return !!sessionStorage.getItem('menteeId');
  }

  MentorIsLoggedIn(){
    return !!sessionStorage.getItem('mentorId');
  }
}