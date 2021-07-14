import { Injectable } from '@angular/core';
import { TokenService } from '../../services/auth/token.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());

	authStatus = this.loggedIn.asObservable();

	changeAuthStatus(value){
		this.loggedIn.next(value);
	}

  	constructor(
  	 private Token: TokenService

  	) { }
}
