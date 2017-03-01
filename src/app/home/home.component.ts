import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogComponentComponent } from "../dialog-component/dialog-component.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  openDialog(){
    this.dialog.open(DialogComponentComponent)
  }
  constructor( public dialog: MdDialog) { }

  ngOnInit() {

  }

}
