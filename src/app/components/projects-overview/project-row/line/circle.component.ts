import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ProjectAnimationStateManager} from '../ProjectAnimationStateManager';

@Component({
  selector: 'app-line',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  animations: [
    trigger('animateState', [
      state('start', style({
        opacity: 0
      })),
      state('expanded', style({
        opacity: 1
      })),
      transition('* => *', animate(500))
    ])
  ]
})
export class CircleComponent implements OnInit {

  @Input() id: string;
  @Output()
  animationDone: EventEmitter<String> = new EventEmitter<String>();
  public state = 'start';

  constructor(private animationManager: ProjectAnimationStateManager) {}

  ngOnInit() {

    this.animationManager.onVisible().subscribe(id => {
      if (this.id === id) {
        this.state = 'expanded';
      }
    });
  }

  animEnd(event) {
    this.animationManager.informAnimationFinished(this.id, event.toState);
  }

}
