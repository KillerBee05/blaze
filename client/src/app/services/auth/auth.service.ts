import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {User} from '../../models/user/user';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  //Auth User
  authenticateUser(user){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/authenticate', user,{headers:headers})
      .map(res => res.json());
  }

}