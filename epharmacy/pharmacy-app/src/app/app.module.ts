import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
//UPDATED...............................26/09/21.....................
import { HomeComponent } from './components/home/home.component';
import { UserRegistrationComponent } from './components/user/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserPasswordForgetComponent } from './components/user/user-password-forget/user-password-forget.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DataComponent } from './components/data/data.component';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
//................................26-09-21.............................

// imported............................................................
import { PharmacyModuleModule } from './pharmacy-module/pharmacy-module.module';
import { PharmacyRoutingModule } from './pharmacy-routing/pharmacy-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent,
    CardComponent,
    //UPDATED 26-09-21...................
    HomeComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    UserPasswordForgetComponent,
    ContactUsComponent,
    DataComponent,
    UserSignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    //included 
    PharmacyModuleModule,
    PharmacyRoutingModule

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
