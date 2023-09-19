import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MentorService } from 'src/app/services/mentor.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Mentor } from 'src/app/models/mentor';

@Component({
  selector: 'app-mentor-view',
  templateUrl: './mentor-view.component.html',
  styleUrls: ['./mentor-view.component.css']
})
export class MentorViewComponent implements OnInit {

  id: number = 0;
  mentor: Mentor = new Mentor();
  mentorImageSrc: string = '';

  constructor(private mentorService: MentorService,
    private route: ActivatedRoute,
    private router: Router){
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mentorService.getMentorByEmployeeId(this.id).subscribe(data => {
      console.log(data.data);
      this.mentor = data.data;

      // Update the value of the form control here
    this.registerForm.get('firstName')?.patchValue(this.mentor.firstName);
    this.registerForm.get('lastName')?.patchValue(this.mentor.lastName);
    this.registerForm.get('email')?.patchValue(this.mentor.email);
    this.registerForm.get('employeeId')?.patchValue(this.mentor.employeeId);
    this.registerForm.get('location')?.patchValue(this.mentor.location);
    this.registerForm.get('jobTitle')?.patchValue(this.mentor.jobTitle);
    this.registerForm.get('company')?.patchValue(this.mentor.company);
    this.registerForm.get('bio')?.patchValue(this.mentor.bio);
    this.registerForm.get('category')?.patchValue(this.mentor.category.category);
    this.registerForm.get('skills')?.patchValue(this.mentor.skills.toString());

    // Set the image source
    this.mentorImageSrc = this.convertByteArrayToDataUrl(this.mentor.profileImage);
    // this.mentorImageSrc = this.convertByteArrayToDataUrl(this.mentor.profileImage);
    
      console.log(this.mentor);
      console.log(this.mentor.firstName);
    })
  }

  registerForm = new FormGroup({
    image: new FormControl(null),
    firstName: new FormControl(this.mentor.firstName, [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    employeeId: new FormControl(0, [Validators.required, Validators.pattern("[0-9]*")]),
    location: new FormControl('', [Validators.required]),
    jobTitle: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    bio: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    skills: new FormControl('')
  });

  convertByteArrayToDataUrl(byteArray: number[]): string {
    // Check if the byteArray is empty or null to terminate the recursion
    if (!byteArray || byteArray.length === 0) {
      return '';
    }
  
    const base64String = btoa(String.fromCharCode(...byteArray));
    return `data:image/jpeg;base64,${base64String}`;
  }

  updateMentor(){
    
    console.log("Inside Update")
    this.router.navigate(['mentor-update', this.mentor.employeeId])
  }

  gotoLoginPage(){
    this.router.navigate(['login'])
  }

  deleteMentor(){
    console.log("Inside Delete")
    this.router.navigate(['mentor-delete', this.mentor.employeeId])
  }

  get firstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
       return this.registerForm.get('lastName') as FormControl;
  }

  get employeeId(): FormControl {
    return this.registerForm.get('employeeId') as FormControl;
  }

  get email(): FormControl {
      return this.registerForm.get('email') as FormControl;
  }


  get location(): FormControl {
    return this.registerForm.get('location') as FormControl;
  }

  get company(): FormControl {
    return this.registerForm.get('company') as FormControl;
  }

  get jobTitle(): FormControl {
    return this.registerForm.get('jobTitle') as FormControl;
  }

  get bio(): FormControl {
    return this.registerForm.get('bio') as FormControl;
  }

  get Category(): FormControl{
    return this.registerForm.get('category') as FormControl;
  }

  get skills(): FormControl{
    return this.registerForm.get('skills') as FormControl;
  }

  logoutUser() {

    sessionStorage.clear();


        this.router.navigate(['/login']);}
}
