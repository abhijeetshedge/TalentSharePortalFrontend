import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TalentSharePortalMentorService } from 'src/app/services/talent-share-portal-mentor.service';
import { MentorService } from './search-mentor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-mentor',
  templateUrl: './search-mentor.component.html',
  styleUrls: ['./search-mentor.component.css']
})

export class SearchMentorComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mentorService: TalentSharePortalMentorService,
    private sharedMentorService: MentorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchSkills: [''] // No validation applied to searchSkills
    });
  }

  onSubmit() {
    const searchSkills = this.searchForm.get('searchSkills')?.value as string;
    const skillsArray = searchSkills.split(',').filter(skill => skill.trim() !== '');
    console.log(skillsArray);

    this.mentorService.getMentorsListBySkill(skillsArray).subscribe(
      (result) => {
        //console.log('Mentor list:', result);
        this.sharedMentorService.setMentors(result);
        this.router.navigate(['/mentor/browse']);
      },
      (error) => {
        console.error('Error: ', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No Mentor found with this skill!',
        })
        this.router.navigate(['/mentor/browse']);
      }
    );
  }

  logoutUser() {

    sessionStorage.clear();

    this.router.navigate(['/login']);
  }
}


