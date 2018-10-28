import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateComponent } from './pages/create/create.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';

import { HeaderComponent } from './shared/header/header.component';

import { BackendService } from './services/backend.service';
import { SessionService } from './services/session.service';
import { AuthService } from './services/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CreateComponent,
    ProfileComponent,
    LoginComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BackendService,
    SessionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
