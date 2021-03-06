import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../shared/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  color!: string;
  buttonText!: string;

  @Input() serverInput!: Server;

  ngOnInit(): void {
    this.setServerStatus(this.serverInput.isOnline)
  }

  setServerStatus(isOnline: boolean) {
    if (isOnline) {
      this.serverInput.isOnline = true;
      this.color = '#66bb6a';
      this.buttonText = 'Turn Off'
    } else {
      this.serverInput.isOnline = false;
      this.color = '#ff6b6b';
      this.buttonText = 'Turn On';
    }
  }

  toggleStatus(onlineStatus: boolean) {
    console.log(this.serverInput.name, ':', onlineStatus);
    this.setServerStatus(!onlineStatus);
  }
}
