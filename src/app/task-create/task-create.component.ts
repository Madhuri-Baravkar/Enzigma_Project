import { Component } from '@angular/core';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  task = { name: '', description: '' };

  createTask() {
    // Logic for task creation (send data to service, etc.)
    console.log('Task Created:', this.task);
    // Reset the task form after creation
    this.task = { name: '', description: '' };
  }
}
