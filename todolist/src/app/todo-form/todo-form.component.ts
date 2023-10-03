// todo-form.component.ts

import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'] // Add this line to link the CSS file
})

export class TodoFormComponent {
  newTask: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService) { }

  onSubmit(): void {
    if (this.newTask.title.trim() === '') {
      return; // Don't add empty tasks
    }
    this.taskService.addTask(this.newTask);
    this.newTask = { id: 0, title: '', description: '', completed: false };
  }
}

