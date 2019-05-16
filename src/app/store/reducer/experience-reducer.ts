import * as ExperienceActions from '../actions/experience.actions';
import {Experience} from '../state/experience';

import experiences from '../state/experiences.json';


// Section 2
export function experienceReducer(state: Experience[] = experiences, action: ExperienceActions.Actions) {

  // Section 3
  switch (action.type) {
    case ExperienceActions.ADD_EXPERIENCE:
      return [...state, action.payload];
    default:
      return state;
  }
}
