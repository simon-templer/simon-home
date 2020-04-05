
import {EExperienceActions, ExperienceActions} from "../actions/experience.actions";
import {IExperienceState, initialExperienceState} from "../state/IExperienceState";

export const experienceReducers = (
  state = initialExperienceState,
  action: ExperienceActions
): IExperienceState => {
  switch (action.type) {
    case EExperienceActions.GetExperiencesSuccess: {
      return {
        ...state,
        experiences: action.payload
      };
    }

    default:
      return state;
  }
};
