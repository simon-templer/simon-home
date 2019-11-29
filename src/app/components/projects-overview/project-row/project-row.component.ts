import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../store/state/project';
import {ProjectAnimationStateManager} from './ProjectAnimationStateManager';
import {NgsRevealService} from 'ngx-scrollreveal';

@Component({
  selector: 'app-project-row',
  templateUrl: './project-row.component.html',
  styleUrls: ['./project-row.component.scss'],

})
export class ProjectRowComponent implements OnInit {

  @Input() project: Project;
  @Input() index: number;

  lineId: string;


  constructor(private revealService: NgsRevealService, private animationManager: ProjectAnimationStateManager) {
  }

  ngOnInit() {
    this.lineId = 'line_' + this.index;
    this.animationManager.register(this.lineId);

    this.revealService.afterReveal$.subscribe(
      (el: HTMLElement) => {
        if (this.lineId === el.id) {
          this.animationManager.informVisible(this.lineId);
        }
      });
  }

}
