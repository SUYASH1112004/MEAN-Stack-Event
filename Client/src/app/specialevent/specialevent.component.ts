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

  specialevent : any[] = []
  constructor(private _eventservice: EventService,private _router:Router){}
  
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


}
