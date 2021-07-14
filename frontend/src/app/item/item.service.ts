import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiURL = "http://localhost:8000/api/items/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Item[]> {
   return this.httpClient.get<Item[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(item): Observable<Item> {
   return this.httpClient.post<Item>(this.apiURL, JSON.stringify(item), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Item> {
   return this.httpClient.get<Item>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, item): Observable<Item> {
   return this.httpClient.put<Item>(this.apiURL + id, JSON.stringify(item), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Item>(this.apiURL + id, this.httpOptions)
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
