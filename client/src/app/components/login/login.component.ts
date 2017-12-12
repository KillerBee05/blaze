import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {User} from '../../models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_name:string;
  password:string;

  constructor(private authService: AuthService) { }

  onLogin(){
    const user = {
      user_name:this.user_name,
      password:this.password
    }
    this.authService.authenticateUser(user)
      .subscribe(user=>{
        console.log(user);
      });
  }

  ngOnInit() {
  }


}
