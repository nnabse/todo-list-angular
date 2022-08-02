import { Component } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  public TodoList: Todo[] = [];

  private todoId: number = 0;
  private isEditorOpened: boolean = false;

  public addTodoForm: Todo = {
    id: this.todoId,
    name: '',
    isDone: false,
    isEditing: false,
  };

  public renameTodoForm = {
    newName: '',
  };

  constructor() {}

  editorToggle(id: number, flag: boolean): void {
    this.TodoList[id].isEditing = flag;
    this.isEditorOpened = flag;
    this.renameTodoForm.newName = this.TodoList[id].name;
  }

  createTodo(): void {
    if (this.addTodoForm.name.trim() !== '') {
      this.TodoList.push({
        id: this.todoId++,
        name: this.addTodoForm.name,
        isDone: false,
        isEditing: false,
      });
    }
    this.addTodoForm.name = '';
  }

  doneTodo(id: number): void {
    this.TodoList.map((elem, index) => {
      if (elem.id === id) {
        this.TodoList[index].isDone = !this.TodoList[index].isDone;
        this.editorToggle(index, false);
      }
    });
  }

  todoEditorOpen(id: number): void {
    if (this.isEditorOpened) return;
    this.TodoList.map((elem, index) => {
      if (elem.id === id) this.editorToggle(index, true);
    });
  }

  todoEditorClose(id: number): void {
    this.TodoList.map((elem, index) => {
      if (elem.id === id) this.editorToggle(index, false);
    });
  }

  renameTodo(id: number): void {
    this.TodoList.map((elem, index) => {
      if (elem.id === id)
        this.TodoList[index].name = this.renameTodoForm.newName;
    });
    this.todoEditorClose(id);
  }

  deleteTodo(id: number): void {
    this.TodoList = this.TodoList.filter((elem) => elem.id !== id);
  }
}
