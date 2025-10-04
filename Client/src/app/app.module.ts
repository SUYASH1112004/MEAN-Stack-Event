import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { SpecialeventComponent } from './specialevent/specialevent.component';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowComponent } from './show/show.component';
import { SignupComponent } from './signup/signup.component'





@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    LoginComponent,
    SpecialeventComponent,
    ShowComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [AuthService,AuthGuard,EventService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true

    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
