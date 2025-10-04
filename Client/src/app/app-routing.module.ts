import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AuthGuard } from './auth.guard';
import { SpecialeventComponent } from './specialevent/specialevent.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/events',
    pathMatch:'full'
  },
  {
    path:'signup',
    component : SignupComponent
  },
  {
    path:'events',
    component:EventsComponent
  },
  {
    path:'special',
    canActivate:[AuthGuard],
    component:SpecialeventComponent
  },
  {
    path:'login',
    component : LoginComponent
  }



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
