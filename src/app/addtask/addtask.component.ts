import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/ToDo';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  
  @Input() existingItems : ToDo[] = [];

  newItem : ToDo = {task : "", completed : false};

  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    this.newItem.task = (<HTMLInputElement> document.getElementById("task")).value;

    this.existingItems.push(this.newItem);
  }
}
