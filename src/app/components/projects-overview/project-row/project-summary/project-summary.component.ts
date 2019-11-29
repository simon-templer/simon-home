import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../store/state/project';
import {animate, style, transition, trigger} from '@angular/animations';
import {ProjectAnimationStateManager} from '../ProjectAnimationStateManager';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('1s ease-out', style({ height: 300, opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: 300, opacity: 1 }),
        animate('1s ease-in', style({ height: 0, opacity: 0 }))
      ])
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
  summaryVisible: boolean;

  constructor(private animationManager: ProjectAnimationStateManager) { }

  ngOnInit() {

    this.animationManager.onVisible().subscribe(val => {
        if (val === this.lineId) {
          this.summaryVisible = true;
        }
      }
    );
  }

}
