import {Experience} from './experience';
import {Project} from './project';
import {experienceReducer} from '../reducer/experience-reducer';
import {projectReducer} from '../reducer/project-reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  readonly experiences: Experience[];
  readonly projects: Project[];
}

export const reducers: ActionReducerMap<AppState> = {
  experiences: experienceReducer,
  projects: projectReducer
};
