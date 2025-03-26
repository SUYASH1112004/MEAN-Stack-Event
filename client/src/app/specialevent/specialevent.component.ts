import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialevent',
  templateUrl: './specialevent.component.html',
  styleUrl: './specialevent.component.css'
})
export class SpecialeventComponent implements OnInit{
  isuserlogin : boolean = false;
  showAdmissionForm : boolean = false;
  events : any[] = []
  specialevent : any[] = []
  constructor(private _eventservice: EventService,private _router:Router){}
  data={name :'',collegeid :'',eventname:'',eventteacher:''}
  ngOnInit(): void {
      this._eventservice.getspecialevents()
      .subscribe(
        res=>this.specialevent=res,
        err=>{
          if(err instanceof HttpErrorResponse )
          {
            if(err.status === 401)
            {
              this._router.navigate(['/login'])
            }
          }

        }
      )
  }

  closeForm()
  {
    this.showAdmissionForm=false;
  }


  openAdmissionForm(event:any)
  {
    
      // this.data.eventname=event.name;
      // this.data.eventteacher=event.teacher;
      // alert('You Must Login First');
      // return;
    
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
