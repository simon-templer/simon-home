// Section 2
import {Action} from '@ngrx/store';
import {Project} from '../state/project';

export const ADD_CERTIFICATE = '[CERTIFICATE] Add';
export const REMOVE_CERTIFICATE = '[CERTIFICATE] Remove';

// Section 3
export class AddCertificate implements Action {
  readonly type = ADD_CERTIFICATE;

  constructor(public payload: Project) {
  }
}

export class RemoveCertificate implements Action {
  readonly type = REMOVE_CERTIFICATE;

  constructor(public payload: number) {
  }
}

// Section 4
export type Actions = AddCertificate | RemoveCertificate;
