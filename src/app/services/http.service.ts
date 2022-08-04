import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL_LINK } from 'src/links.constants';
import { Params } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get<T>(link: string, params?: Params): Observable<T> {
    return this.http.get<T>(`${GLOBAL_LINK}${link}`, { params });
  }

  create<T>(link: string, body: object, params?: Params): Observable<T> {
    return this.http.post<T>(`${GLOBAL_LINK}${link}`, body, { params });
  }

  delete<T>(link: string, params: Params): Observable<T> {
    return this.http.delete<T>(`${GLOBAL_LINK}${link}`, { params });
  }

  update<T>(link: string, params: Params, body: object): Observable<T> {
    return this.http.patch<T>(`${GLOBAL_LINK}${link}`, body, { params });
  }
}
