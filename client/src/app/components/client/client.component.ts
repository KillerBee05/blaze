import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client/client.service';
import {Client} from '../../models/client/client';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[];
  client: Client;
  first_name: string;
  last_name: string;
  phone: string;

  user:Object;

  constructor(
    private clientService: ClientService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.authClient().subscribe(client => {
    this.user = client.user;
    },
    err => {
      console.log(err);
    });

    this.clientService.getClient()
      .subscribe(clients =>
      this.clients = clients);
  }

  addClient(){
    const newClient ={
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }
    this.clientService.addClient(newClient)
      .subscribe(client =>{
        this.clients.push(client);
      });
  }

  updateClient(client){
    const updateClient: Client ={
      _id: client._id,
      first_name: client.first_name,
      last_name: client.last_name,
      phone: client.phone
    }
    this.clientService.updateClient(updateClient)
    .subscribe(result =>{
      this.clientService.getClient();
    });
  }

  deleteClient(id:any){
    var clients = this.clients;
    this.clientService.deleteClient(id)
      .subscribe(data =>{
        if(data.n==1){
          for(var i = 0; i < clients.length; i++){
            if(clients[i]._id == id){
              clients.splice(i,1);
            }
          }
        }
      });
  }



}
