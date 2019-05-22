import * as ProjectActions from '../actions/project.actions';

import certificates from '../state/certificates.json';
import {Certificate} from '../state/certificate';


// Section 2
export function certificateReducer(state: Certificate[] = certificates, action: ProjectActions.Actions) {

  // Section 3
  switch (action.type) {
    case ProjectActions.ADD_PROJECT:
      return [...state, action.payload];
    default:
      return state;
  }
}

