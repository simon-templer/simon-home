import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../store/state/project';
import {NgsRevealService} from 'ngx-scrollreveal';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit {

  @Input()
  project: Project;
  @Input()
  textAlignment: String = 'left';
  constructor(private revealService: NgsRevealService) { }

  ngOnInit() {
  }

}
