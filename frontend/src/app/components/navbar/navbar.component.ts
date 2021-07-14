import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { TokenService } from '../../services/auth/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

	public loggedIn: boolean;

  constructor(
  	private Auth: AuthService,
  	private Token: TokenService,
    private router: Router
  	) { }

  ngOnInit() {
  	
  	this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  // cerrar la sesión del usuario. eliminar el token del almacenamiento local y cambiar el estado de autenticación
  logout(event: MouseEvent){
  	event.preventDefault();
  	this.Auth.changeAuthStatus(false);
  	this.router.navigateByUrl('/login');
  	this.Token.remove();

  }

}
