import {AppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IFullPageState} from "../state/IFullPagetState";

const fullPageState = (state: AppState) => state.fullPageState;

export const selectFullPageState = createSelector(
  fullPageState,
  (state: IFullPageState) => state.fullPageState
);

export const selectFullPageApi = createSelector(
  fullPageState,
  (state: IFullPageState) => state.fullPageAPI
);
