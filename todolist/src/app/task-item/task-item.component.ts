// task-item.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task = new Task();

  @Output() completed = new EventEmitter<Task>();
  @Output() deleted = new EventEmitter<number>();

  onCompletedChange(): void {
    this.completed.emit(this.task);
  }

  editTask(): void {
    // Implement edit functionality here
    // You can use a dialog or inline editing depending on your preference.
  }

  onDelete(): void {
    this.deleted.emit(this.task.id);
  }
}
