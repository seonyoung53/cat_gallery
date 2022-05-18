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
  getCatsList(): Observable<Cat> {
    const url = 'https://api.thecatapi.com/v1/breeds';
    return this.http.get<Cat>(url);
  }

  /**
   * 고양이 리스트 검색
   * @param keyword 
   */
  searchCatsList(keyword: string): Observable<Cat> {
    const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + keyword;
    return this.http.get<Cat>(url);
  }
}
