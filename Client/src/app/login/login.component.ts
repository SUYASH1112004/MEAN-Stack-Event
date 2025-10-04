import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { eventdata } from '../eventdata';
import { check } from '../checkmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginuserdata = {name : '', password : '',collegeid : ''}
  private obj : check = new check();
  public cid : String = ''; 
  constructor(private _auth : AuthService,private _router : Router){}

  ngOnInit(): void {
      
  }
  
  loginUser()  
  {
    this.obj.collegeid=this.loginuserdata.collegeid;
    this.obj.name=this.loginuserdata.name;
    this.obj.password=this.loginuserdata.password;
    this._auth.loginuser(this.loginuserdata).subscribe(
      (res:any)=>{
        console.log('Login Successful',res);
        alert("Login Successfull"); 
        localStorage.setItem('token',res.token);
        this._router.navigate(['/special']);
      },
      (err:any)=>
        {
          console.log(err);
          alert(err);
      }
    )
  }

  @Output () public emit = new EventEmitter()
  public sendmsg()
  {
    this.emit.emit(this.cid);
  }

}