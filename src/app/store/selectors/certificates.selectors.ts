import {AppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {ICertificateState} from "../state/ICertificateState";

const certificatesState = (state: AppState) => state.certificates;

export const selectCertificates = createSelector(
  certificatesState,
  (state: ICertificateState) => state.certificates
);
