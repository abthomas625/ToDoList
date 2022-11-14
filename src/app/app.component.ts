import { Component } from '@angular/core';
import { ToDo } from 'src/ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';

  items : ToDo[] = [{task : "Grocery shopping", completed : false},
                    {task : "Clean bathroom", completed : true},
                    {task : "Organize pantry", completed : false},
                    {task : "T-pose on my enemies", completed : true},
                    {task : "Drink water", completed : true},
                    {task : "Exorcise the demon from my sock drawer", completed : false},
                    {task : "Pay bills", completed : false},
  ];
}
