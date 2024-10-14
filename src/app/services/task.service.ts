import { Injectable } from '@angular/core';

// Define a Task interface to type-check the tasks
export interface Task {
  id: number;
  assignedTo: string;
  status: string;
  dueDate: string;
  priority: string;
  comments: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Initialize an array of tasks
  private tasks: Task[] = [
    { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', comments: 'This task is good' },
    { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', comments: 'This' },
    { id: 3, assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', comments: 'This' },
    { id: 4, assignedTo: 'User 4', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' }
  ];

  constructor() {}

  // Method to get all tasks
  getTasks(): Task[] {
    return this.tasks;
  }

  // Method to delete a task by ID
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  // Add more methods for creating and updating tasks if needed
}
