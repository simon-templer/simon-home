import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgsRevealService} from 'ngx-scrollreveal';
import {ProjectAnimationStateManager} from '../ProjectAnimationStateManager';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
  animations: [
    trigger('animateState', [
      state('start', style({
        width: '0.5em',
        height: 0
      })),
      state('expanded', style({
        width: '0.5em',
        height: '100%',
      })),
      transition('* => *', animate(500))
    ])
  ]
})
export class LineComponent implements OnInit {

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
