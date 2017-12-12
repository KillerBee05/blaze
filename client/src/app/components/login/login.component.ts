import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {User} from '../../models/user/user';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_name:string;
  password:string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  onLogin(){
    const user = {
      user_name:this.user_name,
      password:this.password
    }
    this.authService.authenticateUser(user)
      .subscribe(user=>{
        if(user.success){
          this.router.navigate(['/client']);
          this.flashMessage.show('Welcome to the Demo', { cssClass: 'alert-success', timeout: 5000 });
        }
        else{
          this.flashMessage.show('Incorrect User Name or Password', { cssClass: 'alert-danger', timeout: 5000 });
        }

      });
  }

  ngOnInit() {
  }


}
