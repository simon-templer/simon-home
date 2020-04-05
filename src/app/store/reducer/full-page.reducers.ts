import {IFullPageState, initiaFullPageState} from "../state/IFullPagetState";
import {EFullPageActions, FullPageActions} from "../actions/full-page.actions";

export const fullPageReducers = (
  state = initiaFullPageState,
  action: FullPageActions
): IFullPageState => {
  switch (action.type) {
    case EFullPageActions.updateFullPageState: {
      return {
        ...state,
        fullPageState: action.payload
      };
    }
    case EFullPageActions.updateFullPageApi: {
      return {
        ...state,
        fullPageAPI: action.payload
      };
    }

    default:
      return state;
  }
};
