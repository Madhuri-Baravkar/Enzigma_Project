import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component'; // Adjust the import paths
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'create-task', component: TaskCreateComponent },
  { path: 'edit-task/:id', component: TaskEditComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

