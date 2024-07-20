import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  completedTasks$!: Observable<Task[]>;
  incompleteTasks$!: Observable<Task[]>;
  expandedTaskId: number | null = null; // Propiedad para controlar la tarea expandida

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.completedTasks$ = this.taskService.getTasks().pipe(
      map(tasks => tasks
        .filter(task => task.completed)
      )
    );

    this.incompleteTasks$ = this.taskService.getTasks().pipe(
      map(tasks => tasks
        .filter(task => !task.completed)
      )
    );
  }

  toggleTask(taskId: number): void {
    this.expandedTaskId = this.expandedTaskId === taskId ? null : taskId;
  }

  isExpanded(taskId: number): boolean {
    return this.expandedTaskId === taskId;
  }
}
