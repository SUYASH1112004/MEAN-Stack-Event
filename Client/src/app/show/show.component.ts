import { Component } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  event : any [] =[];

  datasend = {collegeid:''};
  constructor(private events : EventService)
  { }

  tellevent()
  {
    this.events.getregistered(this.datasend.collegeid).subscribe(
      res=>this.event=res,
      err=>
      {
        alert("An Unknown Error Occured");
        console.log(err);
      }
    )
  }
}
