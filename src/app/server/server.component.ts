import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
   serverName = 'NewServer';
   username = ''

   update(event :Event){
    this.username =(<HTMLInputElement>event.target).value
   }
}
