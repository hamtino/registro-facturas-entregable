import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { IndexComponent } from './components/index/index.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

import { AfterLoginService } from './services/auth/after-login.service';
import { BeforeLoginService } from './services/auth/before-login.service';
import { CrearComponent } from './components/crear/crear.component';
import { CrearpersonaComponent } from './components/crearpersona/crearpersona.component';
import { EditarpersonaComponent } from './components/editarpersona/editarpersona.component';
import { FacturarComponent } from './components/facturar/facturar.component';

const appRoutes: Routes = [
  
  {
    path: 'facturar',
    component: FacturarComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'editarpersona/:idPerson',
    component: EditarpersonaComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'crear',
    component: CrearComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'crearpersona',
    component: CrearpersonaComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
