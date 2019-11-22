import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../store/state/project';

@Component({
  selector: 'app-project-row',
  templateUrl: './project-row.component.html',
  styleUrls: ['./project-row.component.scss']
})
export class ProjectRowComponent implements OnInit {

  @Input() project: Project;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
