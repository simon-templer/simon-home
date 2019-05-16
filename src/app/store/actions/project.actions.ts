// Section 2
import {Action} from '@ngrx/store';
import {Project} from '../state/project';

export const ADD_PROJECT = '[PROJECT] Add';
export const REMOVE_PROJECT = '[PROJECT] Remove';

// Section 3
export class AddProject implements Action {
  readonly type = ADD_PROJECT;

  constructor(public payload: Project) {
  }
}

export class RemoveProject implements Action {
  readonly type = REMOVE_PROJECT;

  constructor(public payload: number) {
  }
}

// Section 4
export type Actions = AddProject | RemoveProject;
