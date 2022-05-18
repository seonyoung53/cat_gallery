import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cat } from '../models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  /**
   * 고양이 리스트 조회
   */
  getCatList(keyword: string): Observable<Cat> {
    const url = keyword ? 
    'https://api.thecatapi.com/v1/breeds/search?q=' + keyword : 'https://api.thecatapi.com/v1/breeds';
    return this.http.get<Cat>(url);
  }
}
