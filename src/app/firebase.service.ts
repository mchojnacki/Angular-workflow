import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFireDatabase) {  }

  getData(): Observable<any[]> {
   return this. db.list('disassembly/1').valueChanges();
  }

}
