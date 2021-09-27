import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { DataComponent } from '../components/data/data.component';
import { HomeComponent } from '../components/home/home.component';
import { UserLoginComponent } from '../components/user/user-login/user-login.component';
import { UserPasswordForgetComponent } from '../components/user/user-password-forget/user-password-forget.component';
import { UserRegistrationComponent } from '../components/user/user-registration/user-registration.component';
import { UserSignupComponent } from '../components/user/user-signup/user-signup.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'userReg', component: UserRegistrationComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'drugs', component: DataComponent },
  { path: 'forgotPwd', component: UserPasswordForgetComponent },
  { path: 'signUp', component: UserSignupComponent },
]

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PharmacyRoutingModule { }
