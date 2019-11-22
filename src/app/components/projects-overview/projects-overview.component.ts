import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {Project} from '../../store/state/project';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent implements OnInit {
  projects: Project[];
  customImageUrl = '\'./../../assets/img/stars.jpg\'';

  constructor(private store: Store<AppState>) {

   store.select('projects').pipe(
      map(results => results.sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0)))
    ).subscribe(
      projects => {
        this.projects = projects as Project[];
      });
  }

  ngOnInit() {
  }

}
