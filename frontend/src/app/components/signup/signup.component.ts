import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../../services/auth/login-signup.service';
import { TokenService } from '../../services/auth/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
  	private LoginSignup: LoginSignupService,
  	private Token: TokenService,
  	private router: Router
  	) { }

  public form = {
  	email:null,
  	name: null,
  	password: null,
  	password_confirmation:null
  };

  public error = [];

  ngOnInit() {
  }

  onSubmit() {

    return this.LoginSignup.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error){
    return this.error = error.error.errors;
  }

  // call the service and pass the access_token generated from successfully logged in
  handleResponse(data){
    // console.log(data.access_token);
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }

}
