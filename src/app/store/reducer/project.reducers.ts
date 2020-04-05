
import {initiaProjectState, IProjectState} from "../state/IProjectState";
import {EProjectActions, ProjectActions} from "../actions/project.actions";

export const projectReducers = (
  state = initiaProjectState,
  action: ProjectActions
): IProjectState => {
  switch (action.type) {
    case EProjectActions.GetProjectsSuccess: {
      return {
        ...state,
        projects: action.payload
      };
    }

    default:
      return state;
  }
};
