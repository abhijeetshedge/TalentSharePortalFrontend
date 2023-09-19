import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MenteeService {
  private baseUrl = 'http://localhost:8090/api/v1/mentee';

  constructor(private http: HttpClient) {}

  signup(mentee: any): Observable<any> {
    console.log('Service signup method called');
    return this.http.post(`${this.baseUrl}/register`, mentee);
  }

  login(employeeId:number, password:string): Observable<any> {
    // Assuming your backend has a login API endpoint
    const params = new HttpParams()
    .set('userId', employeeId)
    .set('password', password);
    console.log(params);
    return this.http.get(`${this.baseUrl}/login`, {params});
  }
}

