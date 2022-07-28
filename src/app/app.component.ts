import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list-angular';

  allTasks: taskInterface[] = [];

  addTodoForm: taskInterface = {
    taskName: '',
    isDone: false,
  };

  printForm() {
    this.allTasks.push({ taskName: this.addTodoForm.taskName, isDone: false });
    this.addTodoForm.taskName = '';
  }
  render() {}
}

interface taskInterface {
  taskName: string;
  isDone: boolean;
}
