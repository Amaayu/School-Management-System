// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPostData(): Observable<any> {
    // Implement your logic to get post data
    // For example:
    let url='https://jsonplaceholder.typicode.com/users';
    return this.http.get<any>(url);
  }
}

