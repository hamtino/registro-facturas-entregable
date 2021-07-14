import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiURL = "http://localhost:8000/api/personas/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  create(person): Observable<Persona> {
    return this.httpClient.post<Persona>(this.apiURL, JSON.stringify(person), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  find(id): Observable<Persona> {
    return this.httpClient.get<Persona>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  update(id, person): Observable<Persona> {
    return this.httpClient.put<Persona>(this.apiURL + id, JSON.stringify(person), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  delete(id){
    return this.httpClient.delete<Persona>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
