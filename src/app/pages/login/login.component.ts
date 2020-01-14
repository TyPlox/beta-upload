import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/service.index';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  rmb: boolean = false;
  constructor( 
    public router: Router,
    public _userService: UserService
     ) { }
    
  ngOnInit() {
    this.email = localStorage.getItem("email") || "";
    if(this.email.length>1){
      this.rmb = true;
    }
  }
  login(forma:NgForm) {
    if(forma.invalid){
      return;
    }
    let user = new User(null, null, forma.value.email, forma.value.pass);
    this._userService.login(user, forma.value.rmb).subscribe(ok => window.location.href="http://libro-reservas.space/pages/dashboard");
  }
}
