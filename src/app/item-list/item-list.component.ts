import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

// child class
export class ItemListComponent {
  // @Input()
  // itemList : any[] = [];

  // @Output()
  // newItemEvent = new EventEmitter<any>();

  selectedItems: any;

  onItemClick(item: any) {
    this.selectedItems = item;
  }

  // onItemClick(event: any) {
  //   this.selectedItems = event.target.value;
  //   console.log(event.target.value);
  // }

  itemList = [
    {name: "Airpod", id: 1, price: 250},
    {name: "iPhone", id: 2, price: 1200},
    {name: "Mac Mini", id: 3, price: 1500},
  ]

  // onItemReceived(item: any) {
  //   this.selectedItems = item;
  // }

}
