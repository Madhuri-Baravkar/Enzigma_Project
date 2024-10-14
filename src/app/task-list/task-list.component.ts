import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../services/task.service'; // Import the Task interface and service
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []; // Ensure tasks are initialized

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.refreshTasks();
  }

  refreshTasks() {
    this.tasks = this.taskService.getTasks();
  }

  editTask(id: number) {
    this.router.navigate(['/edit-task', id]);  
  }

  confirmDelete(task: Task) {
    if (confirm(`Do you want to delete task ${task.comments}?`)) {
      this.taskService.deleteTask(task.id);
      this.refreshTasks();
    }
  }
}
