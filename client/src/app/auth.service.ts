import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventsComponent } from './events/events.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginurl="http://localhost:3000/api/login"
  constructor(private http :HttpClient,private route : Router) { }
  private collegeid : string ='';

  loginuser(user : any)
  {
    return this.http.post<any>(this._loginurl,user); //Iferror change here
  }

  logoutuser()
  {
    localStorage.removeItem('token')
    
    this.route.navigate(['/events'])
    
    
    
  }

  gettoken()
  {
    return localStorage.getItem('token')
  }

  getcollegeid()
  {
    return this.collegeid;

  }


  loggedIn() 
  {
    return !!localStorage.getItem('token')
  }


  getAuthHeaders()
  {
    const token = this.gettoken();
    return {
      headers : new HttpHeaders({
        'Authorization':`Bearer ${token}`
      })
    };
  }

isloggedin():boolean
{
  return !!localStorage.getItem('token');
}

setCollegeId(id: string) {
  this.collegeid = id;
  
}

}
