import {AppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IProjectState} from "../state/IProjectState";

const projectsState = (state: AppState) => state.projects;

export const selectProjects = createSelector(
  projectsState,
  (state: IProjectState) => state.projects
);
