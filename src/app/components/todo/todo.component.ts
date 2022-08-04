import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public localTodoList: Todo[] = [];

  public name = '';
  public newName = '';

  private isEditorOpened: boolean = false;

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.todoList$.subscribe((data) => {
      this.localTodoList = data;
    });
    this.todoService.getAllTasks();
  }

  editorToggle(id: number, flag: boolean): void {
    this.localTodoList[id].isEditing = flag;
    this.todoService.todoList$.next(this.localTodoList);
    this.isEditorOpened = flag;
    this.newName = this.localTodoList[id].name;
  }

  createTodo(): void {
    if (this.name.trim() !== '') {
      this.todoService.createTask({ name: this.name });
    }
    this.name = '';
  }

  doneTodo(todo: Todo): void {
    this.todoService.updateTask(todo._id, {
      name: todo.name,
      isDone: !todo.isDone,
    });
    this.toDoEditorToggle(todo._id, false);
    this.isEditorOpened = false;
  }

  toDoEditorToggle(id: number, flag: boolean): void {
    if (this.isEditorOpened && flag) return;
    this.localTodoList.map((elem, index) => {
      if (elem._id === id) this.editorToggle(index, flag);
    });
  }

  renameTodo(todo: Todo): void {
    if (this.newName.trim() !== '') {
      this.todoService.updateTask(todo._id, {
        name: this.newName.trim(),
        isDone: todo.isDone,
        isEditing: false,
      });
      this.isEditorOpened = false;
    }
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTask(id);
  }
}
