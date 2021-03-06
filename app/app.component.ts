import { Component } from '@angular/core';
import { Task} from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>To-do</h1>
    <task-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
      ></task-list>
    <new-task
      (newTaskSender)="addTask($event)"
    ></new-task>
    <edit-task
        [childSelectedTask]="selectedTask"
        (doneClikedSender)="finishedEditing()"
      ></edit-task>
    </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
    new Task("Create To-Do list app.", 0),
    new Task("Learn Kung Fu.", 1),
    new Task("Rewatch all the Lord of the Rings movies.",2),
    new Task("Do the laundry.", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
      this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }
}
