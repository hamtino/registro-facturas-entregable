import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class PersonasService {
  public URL_API = 'http://localhost:8000/api/personas'
  constructor(private http: HttpClient) {}

  
  getallpersonas(): Observable<any[]> {
    return this.http.get<any[]>(this.URL_API);
  }
}
