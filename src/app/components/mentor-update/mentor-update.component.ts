import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MentorService } from 'src/app/services/mentor.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Mentor } from 'src/app/models/mentor';

@Component({
  selector: 'app-mentor-update',
  templateUrl: './mentor-update.component.html',
  styleUrls: ['./mentor-update.component.css']
})
export class MentorUpdateComponent {

  id: number = 0;
  mentor: Mentor = new Mentor();
  mentorImageSrc: string = '';

  allSkills: any[] = [];
  selectedSkills: any[] = [];
  dropdownSettings : IDropdownSettings = {};
  allCategories: any[] = []; 

  constructor(private mentorService: MentorService,
    private route: ActivatedRoute,
    private router: Router){
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchSkills();
    this.fetchCategories();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'skill',
      textField: 'skill',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 6,
    };

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

     this.mentor.skills.forEach(skill=> this.selectedSkills.push(skill));

    console.log("selected skills ", this.selectedSkills)

    this.registerForm.get('skills')?.patchValue(this.selectedSkills);
   // this.mentor.skills.forEach(skill =>this.selectedSkills.push(skill));

   

    // Set the image source
    this.mentorImageSrc = this.convertByteArrayToDataUrl(this.mentor.profileImage);
    // this.mentorImageSrc = this.convertByteArrayToDataUrl(this.mentor.profileImage);
      console.log(this.mentor);
    })
  }

  onSkillSelect(item: any){
    this.selectedSkills.push(item.skill);
    console.log(this.selectedSkills);
  }

  onSkillDeSelect(item: any){
    console.log(item);
    const indexToRemove = this.selectedSkills.indexOf(item.skill);
    this.selectedSkills.splice(indexToRemove, 1);
     console.log(this.selectedSkills);
  }

  onSelectAllSkills(skills: any){

    this.allSkills.forEach(sk => {
    this.selectedSkills.push(sk.skill)
    });  
    console.log(this.selectedSkills);    
  }

  onDeSelectAllSkills(item: any){
    this.selectedSkills = [];
    console.log(this.selectedSkills);
  }

  fetchSkills() {
    this.mentorService.getAllSkills().subscribe(
      (data: any) => {
        console.log(data.data)
        this.allSkills = data.data;
      },
      error => {
        console.error('Error fetching skills:', error);
      }
    );
  }

  fetchCategories() {
    this.mentorService.getAllCategories().subscribe(
      (data: any) => {
        this.allCategories = data.data;
        console.log(this.allCategories); // Log the fetched data
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
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
    skills: new FormControl()
  });

  convertByteArrayToDataUrl(byteArray: number[]): string {
    // Check if the byteArray is empty or null to terminate the recursion
    if (!byteArray || byteArray.length === 0) {
      return '';
    }
  
    const base64String = btoa(String.fromCharCode(...byteArray));
    return `data:image/jpeg;base64,${base64String}`;
  }


  updateMentorDetails() {
    if (this.registerForm.valid) {

      this.mentor.firstName = this.registerForm.get('firstName')?.value || '';
      this.mentor.lastName = this.registerForm.get('lastName')?.value || '';
      this.mentor.email = this.registerForm.get('email')?.value || '';
      this.mentor.password = this.registerForm.get('password')?.value || '';
      this.mentor.employeeId = this.registerForm.get('employeeId')?.value || 0;
      this.mentor.jobTitle = this.registerForm.get('jobTitle')?.value || '';
      this.mentor.company = this.registerForm.get('company')?.value || '';
      this.mentor.location= this.registerForm.get('location')?.value || '';
      this.mentor.bio = this.registerForm.get('bio')?.value || '';
      // this.category.category = this.registerForm.get('category')?.value || ''; 
      // this.category.categoryId=1;
      // this.mentor.category = this.category;
     //this.mentor.skills = this.registerForm.get('skills')?.value;
      //this.mentor.skills = Array.isArray(selectedSkills) ? selectedSkills : [];
      // this.mentor.skills = 
      console.log(this.mentor);
      this.updateMentor(this.mentor);
      alert("Your details have been updated successfully")
  
    } else {

      console.log("Error Occured");
      // Form is invalid, handle validation errors or display a message
    }
  }

  updateMentor(mentor:Mentor){
    this.mentorService.updateMentor(mentor.employeeId,mentor).subscribe(data =>{
      console.log(data);
    },error=>{
      console.log(error)
    }
    )
  }

  viewMentor(){
    this.router.navigate(['mentor-view', this.mentor.employeeId])
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

}
