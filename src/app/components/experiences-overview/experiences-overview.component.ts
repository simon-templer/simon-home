import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store/state/app.state';
import {select, Store} from '@ngrx/store';
import {Experience} from '../../store/model/experience';
import {Observable} from 'rxjs';
import {selectExperiences} from "../../store/selectors/experiences.selectors";

@Component({
  selector: 'app-experiences-overview',
  templateUrl: './experiences-overview.component.html',
  styleUrls: ['./experiences-overview.component.scss'],

})

export class ExperiencesOverviewComponent implements OnInit {
  experiences: Observable<Experience[]>;

  constructor(private store: Store<AppState>) {
    this.experiences = store.pipe(select(selectExperiences));
  }

  ngOnInit() {}

}
