import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../store/model/project';
import {ProjectAnimationStateManager} from './ProjectAnimationStateManager';
import {select, Store} from "@ngrx/store";
import {selectFullPageState} from "../../../store/selectors/full-page.selectors";
import {AppState} from "../../../store/state/app.state";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-project-row',
  templateUrl: './project-row.component.html',
  styleUrls: ['./project-row.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      state('start', style({
        opacity: 0,
      })),
      state('expanded', style({
        opacity: 1,
        transform: 'translateX(10px)'
      })),
      transition('void => *', animate(0)), // <-- This is the relevant bit
      transition('* => *', animate(750))
    ])
  ]
})
export class ProjectRowComponent implements OnInit {

  @Input() project: Project;
  @Input() index: number;
  fullPageStateObservable = this.store.pipe(select(selectFullPageState));
  lineId: string;
  public state = 'start';

  constructor(private animationManager: ProjectAnimationStateManager,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.lineId = 'line_' + this.index;
    this.animationManager.register(this.lineId);

    this.fullPageStateObservable.subscribe(fullPageState => {
      if (fullPageState && fullPageState.destination == 'projects'){
        this.animationManager.informVisible(this.lineId);
      }
    });

    this.animationManager.onVisible().subscribe(val => {
        if (val === this.lineId) {
          this.state = 'expanded';
        }
      }
    );
  }

}
