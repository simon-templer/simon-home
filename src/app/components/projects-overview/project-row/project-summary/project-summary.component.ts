import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../store/model/project';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ProjectAnimationStateManager} from '../ProjectAnimationStateManager';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      state('start', style({
        opacity: 0,
      })),
      state('expanded', style({
        opacity: 1,
        transform: 'translateX(-10px)'
      })),
      transition('void => *', animate(0)), // <-- This is the relevant bit
      transition('* => *', animate(750))
    ])
  ]
})
export class ProjectSummaryComponent implements OnInit {

  @Input()
  project: Project;
  @Input()
  textAlignment: String = 'left';
  @Input()
  lineId: String;
  public state = 'start';

  constructor(private animationManager: ProjectAnimationStateManager) { }

  ngOnInit() {

    this.animationManager.onVisible().subscribe(val => {
        if (val === this.lineId) {
          this.state = 'expanded';
        }
      }
    );
  }

}
