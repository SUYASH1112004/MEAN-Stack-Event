import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  isuserlogin : boolean = false;
  showAdmissionForm : boolean = false;
  events : any[] = []
  constructor(private _eventservice : EventService,private _authservice : AuthService,private router : Router){}

data={name :'',collegeid :'',eventname:'',eventteacher:''};
  ngOnInit(): void {
      this._eventservice.getevents().subscribe(res =>this.events=res,err=>console.log(err))


      this.isuserlogin=this._authservice.isloggedin();
  }

  openAdmissionForm(event:any)
  {
    this.data.eventname=event.name;
    this.data.eventteacher=event.Teacher;
    this.showAdmissionForm=true;
    console.log("Admission Form :",event.name);

  }
  
closeForm()
{
  this.showAdmissionForm=false;
}


onadmission()
  {
    // this.router.navigate(['/register']);
    this._eventservice.eventregistered(this.data).subscribe(
      (res)=>
      {
        console.log('Response :',res);
        alert('Registration Successfull');
        this.data={name:'',collegeid:'',eventteacher:'',eventname:''};
        this.showAdmissionForm=false;
      },
        (err)=>
          {
            console.log('Error',err);
            alert("Registration Failed "+err);
          }
        );
  }


}
