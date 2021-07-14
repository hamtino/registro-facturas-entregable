import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/app.config';

@Injectable({
  providedIn: 'root'
})

export class LoginSignupService {

  constructor(private http: HttpClient) { }

  login(data){
  	return this.http.post(AppConfig.loginUrl, data); // getting the API endpoints from app.config.ts
  }

  signup(data){
  	return this.http.post(AppConfig.signupUrl, data);
  }

  sendPasswordResetLink(data){

  	return this.http.post(AppConfig.sendPasswordResetLinkUrl, data);
  }

  changePassword(data){
    return this.http.post(AppConfig.resetPasswordUrl, data);
  }

}
