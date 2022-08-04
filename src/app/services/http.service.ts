import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL_LINK } from 'src/links.constants';
import { QueryParams } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(link: string, params?: QueryParams): Observable<T> {
    return this.http.get<T>(`${GLOBAL_LINK}${link}`, { params });
  }

  create<T>(link: string, body: object, params?: QueryParams): Observable<T> {
    return this.http.post<T>(`${GLOBAL_LINK}${link}`, body, { params });
  }

  delete<T>(link: string, params: QueryParams): Observable<T> {
    return this.http.delete<T>(`${GLOBAL_LINK}${link}`, { params });
  }

  update<T>(link: string, params: QueryParams, body: object): Observable<T> {
    return this.http.patch<T>(`${GLOBAL_LINK}${link}`, body, { params });
  }
}
