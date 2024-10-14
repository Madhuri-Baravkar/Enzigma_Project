import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  taskId: number = 0; // Default value
  task = { name: '', description: '' };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskId = +id!; // Use the non-null assertion operator to tell TypeScript that id will not be null

    // Fetch the task data based on taskId from a service (hardcoded for now)
    if (this.taskId === 1) {
      this.task = { name: 'Task 1', description: 'Description for Task 1' };
    } else if (this.taskId === 2) {
      this.task = { name: 'Task 2', description: 'Description for Task 2' };
    }
  }

  updateTask() {
    // Logic for updating the task (send data to service, etc.)
    console.log('Task Updated:', this.task);
    // Navigate back to the task list
    this.router.navigate(['/tasks']);
  }
}
