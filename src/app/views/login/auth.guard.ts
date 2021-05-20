import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser: any = this.authenticationService.currentUserValue;
    if (currentUser) {
      console.log(currentUser, 'authguard', route.data.roles);
      // check if route is restricted by role
      if (
        route.data.roles &&
        route.data.roles.indexOf(currentUser.user.employee_type.name) === -1
      ) {
        // role not authorised so redirect to home page
        this.router.navigate(['/']);
        return false;
      }
      console.log('authguard failed');
      // authorised so return true
      return true;
    }
    console.log(currentUser, 'authguard il kerilla', route.data.roles);
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
