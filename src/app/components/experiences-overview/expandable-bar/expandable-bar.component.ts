import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Experience} from '../../../store/model/experience';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../store/state/app.state";
import {selectFullPageState} from "../../../store/selectors/full-page.selectors";

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
export class ExpandableBarComponent implements OnInit {
  expandState = 'normal';
  fadInState = 'out';
  fullPageStateObservable = this.store.pipe(select(selectFullPageState));

  @Input() id: string;
  @Input() offset: string;
  @Input() experience: Experience;

  constructor( private store: Store<AppState>) {
  }

  ngOnInit() {
    this.fullPageStateObservable.subscribe(fullPageState => {
      if (fullPageState && fullPageState.destination == 'skills'){
        this.expandState = 'expanded';
      }
    })
  }

  animEnd(event) {
    // only on state expanded is set we want to trigger the fade in of the percentage label
    if (event.toState === 'expanded') {
      this.fadInState = 'in';
    }
  }

}
