import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../../services/auth/token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
		return this.Token.loggedIn();
	}

  constructor(private Token: TokenService) { }
}
