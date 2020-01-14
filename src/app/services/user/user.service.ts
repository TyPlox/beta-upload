import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  token: string;
  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.loadStorage();
   }
   logged() {
     return (this.token.length > 5) ? true : false;
   }
   loadStorage(){
     if (localStorage.getItem("token")) {
       this.token = localStorage.getItem("token");
       this.user = JSON.parse(localStorage.getItem("user"));
     } else {
       this.token = "";
       this.user = null;
     }
   }
   saveStorage(id: string, token: string, user: User) {
     localStorage.setItem("id", id);
     localStorage.setItem("token", token);
     localStorage.setItem("user", JSON.stringify(user));
   }
   login(user: User, rmb: boolean = false) {
     if(rmb){
       localStorage.setItem("email", user.email);
     }
     else {
       localStorage.removeItem("email");
     }
     let url = environment.apiUrl + "login";
     return this.http.post(url, user).map((resp:any) => {
       localStorage.setItem("id", resp.id);
       localStorage.setItem("token", resp.token);
       localStorage.setItem("user", JSON.stringify(resp.user));
       return true;
      });
   }
   logout() {
     this.user=null;
     this.token="";
     localStorage.removeItem("token");
     localStorage.removeItem("user");
     this.router.navigate(["/home/two"]);
   }
   createUser(user: User){
    let url = environment.apiUrl + "usuario";
    return this.http.post(url, user).map((resp:any) => {
      Swal.fire("Te has registrado sastifactoriamente", user.email, "success")
      return resp.user;
    });
   }
   updateUser(user: User) {
     let url = environment.apiUrl + "usuario" + user._id;
     url += "?token=" + this.token;
     return this.http.put(url, user).map((resp: any)=>{
      let userDB: User = resp.user;
      this.saveStorage(userDB._id, this.token, userDB);
      Swal.fire("Usuario actualizado", "Puedes seguir comprando, " + user.name, "success");
      return true;
     });
   }
}
