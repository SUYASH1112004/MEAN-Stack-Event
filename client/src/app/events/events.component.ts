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

  data={name :'',collegeid :'',eventname:'',eventteacher:''}
  ngOnInit(): void {
      this._eventservice.getevents().subscribe(res =>this.events=res,err=>console.log(err));


      this.isuserlogin=this._authservice.isloggedin();
  }

  closeForm()
  {
    this.showAdmissionForm=false;
  }

  openAdmissionForm(event:any)
  {
    // if(!this.isuserlogin)
    // {
    //   // this.data.eventname=event.name;
    //   // this.data.eventteacher=event.teacher;
    //   alert('You Must Login First');
    //   return;
    // }
    this.data.eventname=event.name;
    this.data.eventteacher=event.Teacher;
    
    this.showAdmissionForm=true;

    console.log('Admisiion EVent :',event.name)
    


  }
  
  


onadmission()
  {
    // this.router.navigate(['/register']);
    this._eventservice.eventregistered(this.data).subscribe(
      (res)=>
      {
        console.log('Response :',res);
        alert('Registration Succesfull');
        this.data={name:'',collegeid:'',eventteacher:'',eventname:''};
        this.showAdmissionForm=false;
      },
      (err)=>
      {
        console.log('Error',err);
        alert("Registration Failed . Please Try Again");
      }
    );
  }




}
