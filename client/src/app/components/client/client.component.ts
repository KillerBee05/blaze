import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../models/client';

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ClientService]
})
export class ClientComponent implements OnInit {
  clients: Client[];
  client: Client;
  first_name: string;
  last_name: string;
  phone: string;

  constructor(private clientService: ClientService) { }

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

  ngOnInit() {
    this.clientService.getClient()
      .subscribe(clients =>
      this.clients = clients);
  }

}
