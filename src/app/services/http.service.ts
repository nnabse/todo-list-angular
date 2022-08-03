import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL_LINK } from 'src/links.constants';
import { DeleteResponse, Todo, UpdateResponse } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(link: string, params?: any): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${GLOBAL_LINK}${link}`, { params });
  }

  create(link: string, body: object, params?: any): Observable<Todo> {
    return this.http.post<Todo>(`${GLOBAL_LINK}${link}`, body, { params });
  }

  delete(link: string, params: any): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${GLOBAL_LINK}${link}`, {
      params,
    });
  }

  update(link: string, params: any, body: object): Observable<UpdateResponse> {
    return this.http.patch<UpdateResponse>(`${GLOBAL_LINK}${link}`, body, {
      params,
    });
  }
}
