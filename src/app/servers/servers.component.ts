import { Component, OnInit } from '@angular/core';

@Component({

  selector : 'app-servers' ,
  templateUrl: './servers.component.html' ,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName = "Test Server";
  serverCreationStatus = 'No server was created';
  allowNewServer = false;
  serverCreated = false;
  servers = ['TestServer1','TestServer2'];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created , Name of the server is " + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event); 
  }
}
