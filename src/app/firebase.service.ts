import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db:AngularFireDatabase) {  }
  aaa;


  getData(): Observable<any[]> {

      // db: AngularFireDatabasen
      this.aaa= this.db.object('disassembly/1');
      
      // set() for destructive updates
      //this.aaa=  this.db.push({ name: 'gngrokonez'});


  //return this.db.list('disassembly').valueChanges();
   return this.db.list('disassembly').valueChanges();
  }

}
