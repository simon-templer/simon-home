import * as ProjectActions from '../actions/project.actions';

import projects from '../state/projects.json';
import {Project} from '../state/project';


// Section 2
export function projectReducer(state: Project[] = projects, action: ProjectActions.Actions) {

  // Section 3
  switch (action.type) {
    case ProjectActions.ADD_PROJECT:
      return [...state, action.payload];
    default:
      return state;
  }
}
