import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../services/register/register.service';
import {User} from '../../models/user/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  users: User[];
  user: User;
  first_name: string;
  last_name: string;
  email: string;
  user_name: string;
  password: string;


  constructor(private registerService: RegisterService) { }
  addUser(){
    const newUser ={
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      user_name: this.user_name,
      password: this.password
    }
    this.registerService.addUser(newUser)
      .subscribe(user =>{
        this.users.push(user);
      });
  }



  ngOnInit() {

  }

}
