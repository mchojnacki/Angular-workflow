import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './../firebase.service';

@Component({
  selector: 'app-disassembly',
  templateUrl: './disassembly.component.html',
  styleUrls: ['./disassembly.component.css']
})
export class DisassemblyComponent implements OnInit {

  constructor(private firebaseService: FirebaseService){

    this.firebaseService.getData().subscribe(data=>{
      console.log(data);
    })

 }


  ngOnInit(): void {
  }

}
