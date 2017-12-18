import { Component, OnInit, Input } from '@angular/core';
import {ClientService} from '../../services/client/client.service';
import {Client} from '../../models/client/client';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  client: Client;
  first_name: string;
  last_name: string;
  phone: string;

  user:Object;

  @Input() public state:string;
  constructor(
    private clientService: ClientService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    debugger;
     this.client = this.clientService.grabClient(client);
    // this.authService.authClient().subscribe(client => {
    // this.user = client.user;
    // },
    // err => {
    //   console.log(err);
    // });

    // this.clientService.grabClient()
    //   .subscribe(client =>
    //   this.client = client);

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
    var client = this.client;
    this.clientService.deleteClient(id)
  }

}
