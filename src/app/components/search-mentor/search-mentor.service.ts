import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  searchMentorsBySkills(selectedSkills: string[]) {
    throw new Error('Method not implemented.');
  }

  private mentorsSubject = new BehaviorSubject<any[]>([]);
  mentors$ = this.mentorsSubject.asObservable();

  setMentors(data: any[]) {
    this.mentorsSubject.next(data);
  }
}
