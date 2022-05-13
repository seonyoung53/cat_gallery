import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from '../common/response-container';
import { Cat } from '../models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  /**
   * 고양이 리스트 조회(더미)
   * @returns 
   */
  getCatsListMock(): Observable<Response<Cat>> {
    return this.http.get<Response<Cat>>('/assets/dummy/catList.json');
  }
}
