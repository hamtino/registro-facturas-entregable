import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Itemfactura } from './itemfactura';


@Injectable({
  providedIn: 'root'
})
export class ItemfacturaService {

  private apiURL = "http://localhost:8000/api/facturasitems/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Itemfactura[]> {
    return this.httpClient.get<Itemfactura[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  create(person): Observable<Itemfactura> {
    return this.httpClient.post<Itemfactura>(this.apiURL, JSON.stringify(person), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  find(id): Observable<Itemfactura> {
    return this.httpClient.get<Itemfactura>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  update(id, person): Observable<Itemfactura> {
    return this.httpClient.put<Itemfactura>(this.apiURL + id, JSON.stringify(person), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  delete(id){
    return this.httpClient.delete<Itemfactura>(this.apiURL + id, this.httpOptions)
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
