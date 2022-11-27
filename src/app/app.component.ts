import { Component } from '@angular/core';
import { ToDo } from 'src/ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';

  items : ToDo[] = [{task : "Grocery shopping", completed : false, isEditing : false},
                    {task : "Clean bathroom", completed : true, isEditing : false},
                    {task : "Organize pantry", completed : false, isEditing : false},
                    {task : "T-pose on my enemies", completed : true, isEditing : false},
                    {task : "Drink water", completed : true, isEditing : false},
                    {task : "Exorcise the demon from my sock drawer", completed : false, isEditing : false},
                    {task : "Pay bills", completed : false, isEditing : false},
  ];

  DeleteToDo(i:number){
    this.items.splice(i,1);
  }

  EditToDo(i: number){
    let t: ToDo = this.items[i];
    t.isEditing = !t.isEditing;
  }
}
