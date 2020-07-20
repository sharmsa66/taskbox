import { OnInit, Component, Input, Output, EventEmitter } from "@angular/core";
import { Select, Store } from '@ngxs/store';
import { TasksState, ArchiveTask, PinTask } from '../state/task.state';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  template: `
   <div class="lists-items">
   <app-pure-task-list
        [tasks]="tasks$ | async"
        (onArchiveTask)="onArchiveTask($event)"
        (onPinTask)="onPinTask($event)"
      >
      </app-pure-task-list>




  `
})
export class TaskListComponent implements OnInit {
  @Select(TasksState.getAllTasks) tasks$: Observable<Task[]>;
  constructor(private store: Store) { }

  ngOnInit() {

  }

  onArchiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
  }

  onPinTask(id: string) {
    this.store.dispatch(new PinTask(id));
  }

}
