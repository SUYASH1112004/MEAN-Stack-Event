import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { check } from '../checkmodel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  
  loginuserdata = {email : '', collegeid:'' ,password : ''}
  private checkobj : check = new check;
  public cid : String ='';
  constructor(private _auth : AuthService,private _router : Router){}

  ngOnInit(): void {
      
  }
  
  loginUser()  
  {
    // this.loginevent=true;
    this.checkobj.name=this.loginuserdata.email
    this.checkobj.collegeid=this.loginuserdata.collegeid;
    this.checkobj.password=this.loginuserdata.password
    this._auth.loginuser(this.checkobj).subscribe(
      (res:any)=>{
        console.log('Login Successful',res)
        localStorage.setItem('token',res.token)
        this.cid=this.checkobj.collegeid;
        this._router.navigate(['/special'])
      },
      (err:any)=>
        {
          console.log(err)
          alert('Invalid Credential')
      }
    )
  }

  @Output () public obj = new EventEmitter()
  public sendmsg()
  {
    this.obj.emit(this.cid);

  }

}




// if(this._authService.isloggedin())
//   {
//     const collegeid = this._authService.getcollegeid();

//     this.event.getregistered(collegeid).subscribe(
//       res=>this.events=res,
//       err=>
//       {
//         alert('An Unknown Error Occured');
//         console.log(err);
//       }
//     )
//   }
