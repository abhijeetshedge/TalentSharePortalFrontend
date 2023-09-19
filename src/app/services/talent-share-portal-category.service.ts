import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class TalentSharePortalCategoryService {

  private baseURL = 'http://localhost:8080/api/v1/category';

  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<Category> {
    const url = `${this.baseURL}/get-all-categories`;
    return this.httpClient.get<Category>(url);
  }
}

