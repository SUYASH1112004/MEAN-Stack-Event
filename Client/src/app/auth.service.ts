import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginurl=`${environment.API_URL}/login`;
  private signupurl = `${environment.API_URL}/signup`;
  constructor(private http :HttpClient,private route : Router) { }

  signupservice(form : any)
  {
    return this.http.post<any>(this.signupurl,form);
  }

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


}
