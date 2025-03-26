import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public msg : any

  title = 'Eventhub';
  constructor(public _authService : AuthService,private event: EventService){}
  // events : any[] =[]

  ngOnInit(): void {
    
    // if(this._authService.isloggedin())
    // {
    //   const collegeid = this._authService.getcollegeid();

    //   this.event.getregistered(collegeid).subscribe(
    //     res=>this.events=res,
    //     err=>
    //     {
    //       alert('An Unknown Error Occured');
    //       console.log(err);
    //     }
    //   )
    // }
    

    
  }


  loginevent : boolean = false


}
