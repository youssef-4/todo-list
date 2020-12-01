import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Item } from './../../../interfaces/item';
import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() itemList:Item[];

  constructor(private dialog: MatDialog) { }


  openDialog(){
    const dialogConfig =new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data ={
      orderId:1,
      name:'prueba',
      description: 'prueba'
    }

    this.dialog.open(DialogComponent, dialogConfig);


  }

  ngOnInit(): void {
    this.openDialog();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    this.itemList.sort((a,b)=> b.orderId - a.orderId);
  }
}
