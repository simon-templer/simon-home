import {FullPage} from "../model/full-page";

export interface IFullPageState {
  fullPageState: FullPage;
  fullPageAPI: any;
}

export const initiaFullPageState: IFullPageState = {
  fullPageState: null,
  fullPageAPI: null
};
