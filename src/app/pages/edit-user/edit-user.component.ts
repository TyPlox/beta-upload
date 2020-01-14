import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/service.index';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditComponent implements OnInit {

  user: User;
  constructor( public _userService: UserService,
    public router: Router ) { 
    this.user = this._userService.user;
  }

  ngOnInit() {
  }
  save(user: User) {
  this.user.name = user.name; 
  this.user.lastname = user.lastname;
  this.user.email = user.email;
  this._userService.updateUser(this.user).subscribe(resp => this.router.navigate(["/pages/dashboard"]));
  }
}
