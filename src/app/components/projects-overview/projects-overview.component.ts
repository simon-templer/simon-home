import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {Project} from '../../store/state/project';
import {Observable} from 'rxjs';
import {NgsRevealConfig} from 'ngx-scrollreveal';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent implements OnInit {
  projects: Project[];
  experiences: Observable<Project[]>;
  customImageUrl = '\'./../../assets/img/stars.jpg\'';

  constructor(private store: Store<AppState>) {
    store.select('projects').subscribe(projects => {
      this.projects = projects as Project[];
      this.experiences = store.select('projects');
    });
  }

  ngOnInit() {
  }

}
