import {Experience} from './experience';
import {Project} from './project';
import {experienceReducer} from '../reducer/experience-reducer';
import {projectReducer} from '../reducer/project-reducer';
import {ActionReducerMap} from '@ngrx/store';
import {Certificate} from './certificate';
import {certificateReducer} from '../reducer/certificate-reducer';

export interface AppState {
  readonly experiences: Experience[];
  readonly projects: Project[];
  readonly certificates: Certificate[];
}

export const reducers: ActionReducerMap<AppState> = {
  experiences: experienceReducer,
  projects: projectReducer,
  certificates: certificateReducer
};
