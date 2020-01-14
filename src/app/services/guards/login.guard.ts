import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor( public _userService: UserService,
    public router: Router ) {}
  canActivate( ) {
    if ( this._userService.logged()) {
      console.log("Accepted by the guard");
      return true;
    } else {
      console.log("Rejected by the guard");
      Swal.fire("¡Un momento!", "Primero debes inicar sesión", "warning");
      this.router.navigate(["/pages/login"]);
      return false;
    }
  }
}