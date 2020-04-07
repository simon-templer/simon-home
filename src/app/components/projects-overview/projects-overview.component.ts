import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {Project} from '../../store/model/project';
import {map} from 'rxjs/operators';
import {selectProjects} from "../../store/selectors/project.selectors";

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent implements OnInit {
  projects: Project[];

  constructor(private store: Store<AppState>) {

    store.pipe(select(selectProjects)).pipe(
      map(results => results.sort((a, b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0)))
    ).subscribe(
      projects => {
        this.projects = projects as Project[];
      });
  }

  ngOnInit() {
  }

}
