import { Injector,Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TokenInterceptorService implements HttpInterceptor{

//   constructor(private injector : Injector) { }
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//       let authservice=this.injector.get(AuthService)
//       const tokenizedReq=req.clone(
//         {
//           headers : req.headers.set('Authorization','bearer'+authservice.gettoken())
//         }
//       )
//       return next.handle(tokenizedReq)
//   }
// }

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}
  intercept(req : any, next : any) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + authService.gettoken())
      }
    )
    return next.handle(tokenizedReq)
  }

}