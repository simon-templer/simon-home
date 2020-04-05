import {Action} from '@ngrx/store';
import {Project} from '../model/project';

export enum EProjectActions {
  GetProjects = '[Project] Get Projects',
  GetProjectsSuccess = '[Project] Get Projects Success',
}

export class GetProjects implements Action {
  readonly type = EProjectActions.GetProjects;

  constructor() {
  }
}

export class GetProjectsSuccess implements Action {
  public readonly type = EProjectActions.GetProjectsSuccess;
  constructor(public payload: Project[]) {}
}


export type ProjectActions = GetProjects | GetProjectsSuccess;
