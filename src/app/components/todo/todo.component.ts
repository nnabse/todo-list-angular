import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  TodoList: ITodo[] = [];

  todoId: number = 0;
  isEditorOpened: boolean = false;

  addTodoForm: ITodo = {
    id: this.todoId,
    name: 'Task name',
    isDone: false,
    isEditing: false,
  };

  renameTodoForm = {
    newName: '',
  };

  createTodo() {
    if (this.addTodoForm.name.trim() === '') {
      this.addTodoForm.name = '';
      return;
    } else {
      this.TodoList.push({
        id: this.todoId++,
        name: this.addTodoForm.name,
        isDone: false,
        isEditing: false,
      });
      this.addTodoForm.name = '';
    }
  }

  doneTodo(id: number) {
    this.TodoList.forEach((elem, index) => {
      if (elem.id === id) {
        this.TodoList[index].isDone = !this.TodoList[index].isDone;
        this.TodoList[index].isEditing = false;
        this.isEditorOpened = false;
      }
    });
  }

  todoEditorOpen(id: number) {
    if (this.isEditorOpened) return;
    else {
      this.TodoList.forEach((elem, index) => {
        if (elem.id === id) {
          this.TodoList[index].isEditing = true;
          this.isEditorOpened = true;
          this.renameTodoForm.newName = this.TodoList[index].name;
        }
      });
    }
  }

  todoEditorClose(id: number) {
    this.TodoList.forEach((elem, index) => {
      if (elem.id === id) {
        this.TodoList[index].isEditing = false;
        this.isEditorOpened = false;
        this.renameTodoForm.newName = this.TodoList[index].name;
      }
    });
  }

  renameTodo(id: number) {
    this.TodoList.forEach((elem, index) => {
      if (elem.id === id)
        this.TodoList[index].name = this.renameTodoForm.newName;
    });
    this.todoEditorClose(id);
  }

  deleteTodo(id: number) {
    this.TodoList.forEach((elem, index) => {
      if (elem.id === id) this.TodoList.splice(index, 1);
    });
  }
}
