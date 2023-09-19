import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TalentSharePortalMentorService {
  private baseURL = "http://localhost:8080/api/v1/mentor";
  private skillbaseURL = "http://localhost:8080/api/v1/skill";
  constructor(private httpClient: HttpClient) { }
  
    getMentorsListBySkill(skills: string[]): Observable<any> {
      console.log("getMentorsListBySkill method called..!")
      const additionalPath = "/search";
      const url = `${this.baseURL}${additionalPath}`;
      const params = new HttpParams().set('skills', skills.join(','));
      return this.httpClient.get<any>(url, { params });
  }
}