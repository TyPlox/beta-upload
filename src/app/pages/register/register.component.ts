import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../../services/service.index';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  forma: FormGroup

  constructor(
    public _userService: UserService,
    public router: Router
    ) { }

    equal( fieldOne: string, fieldTwo: string) {
      return ( group: FormGroup) => {
        let pass = group.controls[fieldOne].value;
        let two = group.controls[fieldTwo].value;
        if (pass === two) {
          return null;
        }
        return {
          equal: true
        }
      }
    }
    emails( fieldTre: string, fieldFour: string) {
      return ( group: FormGroup) => {
        let email = group.controls[fieldTre].value;
        let repet = group.controls[fieldFour].value;
        if (email === repet) {
          return null;
        }
        return {
          emails: true
        }
      }
    }

  ngOnInit() {
    this.forma = new FormGroup({
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      repet: new FormControl(null, Validators.required),
      pass: new FormControl(null, Validators.required),
      two: new FormControl(null, Validators.required),
      cond: new FormControl(false)
    }, { validators: [this.equal("pass", "two"), this.emails("email", "repet")]});
  }
  register() {
    if (this.forma.invalid) {
      return;
    }
    if (!this.forma.value.cond) {
      Swal.fire("Importante", "Debe de aceptar los Términos de uso y Políticas de privacidad", "warning");
      return;
    }
    let user = new User(
      this.forma.value.fname,
      this.forma.value.lname,
      this.forma.value.email,
      this.forma.value.pass
    );
    this._userService.createUser(user).subscribe(resp => this.router.navigate(["/pages/login"]));
  }
}
