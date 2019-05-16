import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {Experience} from '../../store/state/experience';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-experiences-overview',
  templateUrl: './experiences-overview.component.html',
  styleUrls: ['./experiences-overview.component.scss'],

})

export class ExperiencesOverviewComponent implements OnInit {
  experiences: Observable<Experience[]>;

  constructor(private store: Store<AppState>) {
    this.experiences = store.select('experiences');
  }

  ngOnInit() {}

}
