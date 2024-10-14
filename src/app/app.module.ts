import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCreateComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // This should include routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
