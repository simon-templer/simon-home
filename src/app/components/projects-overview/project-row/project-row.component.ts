import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../store/model/project';
import {ProjectAnimationStateManager} from './ProjectAnimationStateManager';
import {select, Store} from "@ngrx/store";
import {selectFullPageState} from "../../../store/selectors/full-page.selectors";
import {AppState} from "../../../store/state/app.state";

@Component({
  selector: 'app-project-row',
  templateUrl: './project-row.component.html',
  styleUrls: ['./project-row.component.scss'],

})
export class ProjectRowComponent implements OnInit {

  @Input() project: Project;
  @Input() index: number;
  fullPageStateObservable = this.store.pipe(select(selectFullPageState));
  lineId: string;


  constructor(private animationManager: ProjectAnimationStateManager,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.lineId = 'line_' + this.index;
    this.animationManager.register(this.lineId);

    this.fullPageStateObservable.subscribe(fullPageState => {
      if (fullPageState && fullPageState.destination == 'projects'){
        this.animationManager.informVisible(this.lineId);
      }
    });
  }

}
