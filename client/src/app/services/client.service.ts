import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Client} from '../models/client';
import 'rxjs/add/operator/map';


@Injectable()
export class ClientService {

  constructor(private http: Http) { }
  // retrieving ClientService

  getClient(){
    return this.http.get('http://localhost:3000/api/client')
    .map(res => res.json());
  }
  //Left off on 56:24 youtube.com/watch?v=wtIvu085uU0&t=2622s

  //add Client
  addClient(newClient){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/client', newClient,{headers:headers})
      .map(res => res.json());
  }

  //update
  updateClient(newClient){
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/api/client/'+newClient._id, newClient, {headers:headers})
      .map(res => res.json());
  }

  //delete
  deleteClient(id){
    return this.http.delete('http://localhost:3000/api/client/'+id)
      .map(res => res.json());
  }

}
