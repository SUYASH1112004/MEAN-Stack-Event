import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      console.log('true')
      return true
    } 
    else {
      console.log('false')            
      this._router.navigate(['/login'])
      return false
    }
  }
}   
// export const authGuard: CanActivateFn = (route, state) => {
  
//   const authservice = inject(AuthService);
//   const router=inject(Router);

//   if(authservice.loggedIn())
//   {
//     console.log('true');
//     return true;
//   }
//   console.log('false')
//   router.navigate(['/login']);
//   return false;
// };
