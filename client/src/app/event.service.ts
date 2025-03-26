import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { eventdata } from './eventdata';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http : HttpClient,private authservice : AuthService) { }

  private _eventurl="http://localhost:3000/api/events";
  private _specialeventurl="http://localhost:3000/api/special";

  private _posturl="http://localhost:3000/api/register";

  private _getregistered="http://localhost:3000/api/getregister";

  getevents():Observable <any[]> // if not work change here <any[]>
  {
    return this.http.get<any []>(this._eventurl)
  }

  getspecialevents() : Observable<any[]>  //If not worked change here 
  {
    return this.http.get<any []>(this._specialeventurl,this.authservice.getAuthHeaders());
  }

  eventregistered( data : eventdata) : Observable<any>
  {
    return this.http.post<any>(this._posturl,data);
  }

  getregistered(collegeid : String) : Observable <any[]>
  {
    return this.http.get<any []>(`${this._getregistered}/${collegeid}`);

  }


}
