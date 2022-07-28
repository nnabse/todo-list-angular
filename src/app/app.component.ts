import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list-angular';

  allTasks: any[] = [{ taskName: 'Учить Angular', isDone: false }];

  addTodoForm: any = {
    taskName: 'Учить Angular',
    isDone: false,
  };

  printForm() {
    this.allTasks.push({ taskName: this.addTodoForm.taskName, isDone: false });
    this.addTodoForm.taskName = '';
  }
  render() {}
}
