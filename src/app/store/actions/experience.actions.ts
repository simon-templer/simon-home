// Section 2
import {Action} from '@ngrx/store';
import {Experience} from '../state/experience';

export const ADD_EXPERIENCE = '[TUTORIAL] Add';
export const REMOVE_EXPERIENCE = '[TUTORIAL] Remove';

// Section 3
export class AddExperience implements Action {
  readonly type = ADD_EXPERIENCE;

  constructor(public payload: Experience) {
  }
}

export class RemoveExperience implements Action {
  readonly type = REMOVE_EXPERIENCE;

  constructor(public payload: number) {
  }
}

// Section 4
export type Actions = AddExperience | RemoveExperience;
