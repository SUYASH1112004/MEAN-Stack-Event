import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { eventdata } from './eventdata';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http : HttpClient,private authservice : AuthService) { }

  private _eventurl=`${environment.API_URL}/events`;
  private _specialeventurl=`${environment.API_URL}/special`;

  private _posturl=`${environment.API_URL}/register`;

  private _getregistered=`${environment.API_URL}/getregistered`;

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

  getregistered(collegeid : string): Observable<any[]>
  {
    return this.http.get<any[]>(`${this._getregistered}/${collegeid}`);
  }

}
