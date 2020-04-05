import {Action} from '@ngrx/store';
import {FullPage} from "../model/full-page";

export enum EFullPageActions {
  GetFullPageState = '[FullPage] Get FullPage state',
  updateFullPageState = '[FullPage] update FullPages state',
  updateFullPageApi = '[FullPage] update FullPages api',
}

export class GetFullPageState implements Action {
  readonly type = EFullPageActions.GetFullPageState;

  constructor() {
  }
}

export class UpdateFullPageState implements Action {
  public readonly type = EFullPageActions.updateFullPageState;
  constructor(public payload: FullPage) {}
}

export class UpdateFullPageApi implements Action {
  public readonly type = EFullPageActions.updateFullPageApi;
  constructor(public payload: any) {}
}

export type FullPageActions = GetFullPageState | UpdateFullPageState |UpdateFullPageApi;
