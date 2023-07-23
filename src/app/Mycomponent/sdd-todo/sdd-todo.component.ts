import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-sdd-todo',
  templateUrl: './sdd-todo.component.html',
  styleUrls: ['./sdd-todo.component.css']
})
export class SddTodoComponent {
  title!:string;
  desc!:string
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    const todo = {
      sno:8,
      title:this.title,
      desc:this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
