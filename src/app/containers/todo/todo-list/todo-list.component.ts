import { Component, OnInit } from '@angular/core';
import { TodoListItems } from '../../../models';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  items: TodoListItems[] = [
    { description: 'Mow Lawn', completed: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
