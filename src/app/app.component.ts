import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clients: any[];
  constructor(db : AngularFireDatabase){
  db.list("/Client").valueChanges()
  .subscribe(client => {
    this.clients=client;
    console.log(this.clients);
  });
  }
}
