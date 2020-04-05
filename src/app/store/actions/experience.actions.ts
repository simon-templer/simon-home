import {Action} from '@ngrx/store';
import {Experience} from '../model/experience';

export enum EExperienceActions {
  GetExperiences = '[Experience] Get Experiences',
  GetExperiencesSuccess = '[Experience] Get Experiences Success',
}

export class GetExperiences implements Action {
  readonly type = EExperienceActions.GetExperiences;

  constructor() {
  }
}

export class GetExperiencesSuccess implements Action {
  public readonly type = EExperienceActions.GetExperiencesSuccess;
  constructor(public payload: Experience[]) {}
}


export type ExperienceActions = GetExperiences | GetExperiencesSuccess;
