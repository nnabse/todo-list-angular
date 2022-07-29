import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list-angular';

  allTasks: taskInterface[] = [];

  id: number = 0;

  addTodoForm: taskInterface = {
    id: 0,
    taskName: '',
    isDone: false,
  };

  addTask() {
    this.allTasks.push({
      id: this.id++,
      taskName: this.addTodoForm.taskName,
      isDone: false,
    });
    this.addTodoForm.taskName = '';
  }

  removeTask(itemId: number) {
    this.allTasks.forEach((elem, index) => {
      if (elem.id === itemId) this.allTasks.splice(index, 1);
    });
  }
  render() {}
}

interface taskInterface {
  id: number;
  taskName: string;
  isDone: boolean;
}
