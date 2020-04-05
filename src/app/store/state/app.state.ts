import {initiaProjectState, IProjectState} from "./IProjectState";
import {IExperienceState, initialExperienceState} from "./IExperienceState";
import {ICertificateState, initialCertificateState} from "./ICertificateState";
import {IFullPageState, initiaFullPageState} from "./IFullPagetState";

export interface AppState {
  readonly experiences: IExperienceState;
  readonly projects: IProjectState;
  readonly certificates: ICertificateState;
  readonly fullPageState: IFullPageState;
}

export const initialAppState: AppState = {
  projects: initiaProjectState,
  certificates: initialCertificateState,
  experiences: initialExperienceState,
  fullPageState: initiaFullPageState
};

export function getInitialState(): AppState {
  return initialAppState;
}
