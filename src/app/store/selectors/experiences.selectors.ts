import {AppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IExperienceState} from "../state/IExperienceState";

const experiencesState = (state: AppState) => state.experiences;

export const selectExperiences = createSelector(
  experiencesState,
  (state: IExperienceState) => state.experiences
);
