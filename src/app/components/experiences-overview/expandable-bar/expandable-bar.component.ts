import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgsRevealService} from 'ngx-scrollreveal';
import {Experience} from '../../../store/state/experience';

@Component({
  selector: 'app-expandable-bar',
  templateUrl: './expandable-bar.component.html',
  styleUrls: ['./expandable-bar.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('expanded', style({
        width: '{{width}}',
      }), {params: {width: '3em'}}),
      state('normal', style({
        width: '0px'
      })),
      transition('normal <=> expanded', animate('{{time}}')),
    ]),
    trigger('FadeIn', [
      state('out', style({opacity: 0})),
      state('in', style({opacity: 1})),
      transition('out => in', animate('500ms')),
    ])
  ]
})
export class ExpandableBarComponent implements OnInit, OnDestroy {
  expandState = 'normal';
  fadInState = 'out';
  afterRevealSubscription;

  @Input() id: string;
  @Input() offset: string;
  @Input() experience: Experience;

  constructor(private revealService: NgsRevealService) {
  }

  ngOnInit() {

    this.afterRevealSubscription = this.revealService.afterReveal$.subscribe(
      (el: HTMLElement) => {
        if (this.id === el.id) {
          console.log(`afterReveal of '<${el.id}>.${el.className}'`);
          this.expandState = 'expanded';
        }
      });
  }

  animEnd(event) {
    // only on state expanded is set we want to trigger the fade in of the percentage label
    if (event.toState === 'expanded') {
      this.fadInState = 'in';
    }
  }

  ngOnDestroy() {
    this.afterRevealSubscription.unsubscribe();
  }

}
