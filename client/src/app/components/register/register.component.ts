import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../services/register/register.service';
import {User} from '../../models/user/user';
import {Router} from '@angular/router';
import {ValidationService} from '../../services/validation/validation.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  first_name: string;
  last_name: string;
  email: string;
  user_name: string;
  password: string;


  constructor(
    private registerService: RegisterService,
    private validationService: ValidationService,
    private router: Router
  ) { }

  addUser(){
    const newUser ={
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      user_name: this.user_name,
      password: this.password
    }

    //Required Fields
    if(!this.validationService.validateRegister(newUser)){
      console.log('Please fill in all fields');
      return false;
    }

    // Required Email
    if(!this.validationService.validateEmail(this.email)){
      console.log('Please a valid email');
      return false;
    }

    this.registerService.addUser(newUser)
      .subscribe(user =>{
        if(user){
          this.router.navigate(['/login']);
        }
        else{
          console.log("WE have an error");
        }
      });


  }

  ngOnInit() {

  }

}
