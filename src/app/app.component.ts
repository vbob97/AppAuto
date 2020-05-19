import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { promise } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private myAuth :AngularFireAuth){
      
  }

  signIn(email :string ,password:string): Promise<any> {
      return this.myAuth.auth.signInWithEmailAndPassword(email,password);
  }
  signUp(email :string ,password:string): Promise<any> {

    return this.myAuth.auth.createUserWithEmailAndPassword(email,password);
  }
  signOut(): Promise<any>{
    return this.myAuth.auth.signOut();
  }
}
