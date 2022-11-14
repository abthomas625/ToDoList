import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/ToDo';

@Component({
  selector: 'app-completetask',
  templateUrl: './completetask.component.html',
  styleUrls: ['./completetask.component.css']
})
export class CompletetaskComponent implements OnInit {
  @Input() existingItems : ToDo[] = [];
  @Input() indexToComplete : number = -1;
  constructor() { }

  ngOnInit(): void {
  }

  completeTask(index:number){
    this.existingItems[index].completed = true;
  }
}
