import { Component } from '@angular/core';
import {FirebaseService} from './firebase.service';
//import { AngularFireDatabase } from '@angular/fire/database';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workflow';

 constructor(private firebaseService: FirebaseService){

    this.firebaseService.getData().subscribe(data=>{
      console.log(data);
    })

 }

 


}
