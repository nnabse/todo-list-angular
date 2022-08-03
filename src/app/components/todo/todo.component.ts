import { Component, isDevMode, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public localTodoList: Todo[] = this.todoService.todoList;

  private todoId: number = 0;
  private isEditorOpened: boolean = false;

  public addTodoForm: Todo = {
    _id: this.todoId,
    name: '',
    isDone: false,
    isEditing: false,
  };

  public renameTodoForm = {
    newName: '',
  };

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAllTasks();
  }

  editorToggle(id: number, flag: boolean): void {
    this.todoService.todoList[id].isEditing = flag;
    this.isEditorOpened = flag;
    this.renameTodoForm.newName = this.todoService.todoList[id].name;
  }

  createTodo(): void {
    if (this.addTodoForm.name.trim() !== '') {
      this.todoService.createTask({ name: this.addTodoForm.name });
    }
    this.addTodoForm.name = '';
  }

  doneTodo(todo: Todo): void {
    this.todoService.updateTask(todo._id, {
      name: todo.name,
      isDone: !todo.isDone,
    });
  }

  todoEditorOpen(id: number): void {
    if (this.isEditorOpened) return;
    this.todoService.todoList.map((elem, index) => {
      if (elem._id === id) this.editorToggle(index, true);
    });
  }

  todoEditorClose(id: number): void {
    this.todoService.todoList.map((elem, index) => {
      if (elem._id === id) this.editorToggle(index, false);
    });
  }

  renameTodo(todo: Todo): void {
    if (this.renameTodoForm.newName.trim() !== '') {
      this.todoService.updateTask(todo._id, {
        name: this.renameTodoForm.newName.trim(),
        isDone: todo.isDone,
      });
    }
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTask(id);
  }
}
