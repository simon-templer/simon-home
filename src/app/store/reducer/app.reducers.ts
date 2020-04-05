import { ActionReducerMap } from '@ngrx/store';
import {AppState} from "../state/app.state";
import {projectReducers} from "./project.reducers";
import {experienceReducers} from "./experience.reducers";
import {certificateReducers} from "./certificate.reducers";
import {fullPageReducers} from "./full-page.reducers";

export const appReducers: ActionReducerMap<AppState, any> = {
  projects: projectReducers,
  experiences: experienceReducers,
  certificates: certificateReducers,
  fullPageState: fullPageReducers
};
