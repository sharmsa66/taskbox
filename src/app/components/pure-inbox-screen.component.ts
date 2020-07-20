import { Component, OnInit, Input } from'@angular/core';

@Component({
  selector: 'app-pure-inbox-screen',
  template: `
  <div *ngIf="error" class="page lists-show">
    <div class="wrapper-message">
      <span class="icon-face-sad"></span>
      <div class="title-message">
        Oh no!
      </div>
      <div class="sub-title-message">
        Something went wrong.
      </div>
    </div>
</div>

   <div *ngIf="!error">
   <nav>
        <h1 class="title-page">
          <span class="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <app-task-list></app-task-list>
   </div>

  `
})

export class PureInboxScreenComponent implements OnInit {
  @Input() error: any;

  constructor() {}

  ngOnInit() {}
}
