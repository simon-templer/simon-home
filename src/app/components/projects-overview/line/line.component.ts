import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgsRevealService} from 'ngx-scrollreveal';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
  animations: [
    trigger('animateState', [
      state('active', style({
        width: '0.5em',
        height: 0
      })),
      state('inactive', style({
        width: '0.5em',
        height: '100%',
      })),
      transition('* => *', animate(2000))
    ])
  ]
})
export class LineComponent implements OnInit {

  @Input() id: string;
  @Output()
  animationDone: EventEmitter<String> = new EventEmitter<String>();
  public state = 'active';
  afterRevealSubscription;

  constructor(private revealService: NgsRevealService) {}

  ngOnInit() {
    this.afterRevealSubscription = this.revealService.afterReveal$.subscribe(
      (el: HTMLElement) => {
        if (this.id === el.id) {
          console.log(`afterReveal of '<${el.id}>.${el.className}'`);
          this.state = 'inactive';
        }
      });
  }

  animEnd(event) {
    // only on state expanded is set we want to trigger the fade in of the percentage label
    this.animationDone.emit(this.id);
  }
}
