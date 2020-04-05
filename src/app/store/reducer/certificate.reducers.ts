
import {ECertificateActions, CertificateActions} from "../actions/certificate.actions";
import {ICertificateState, initialCertificateState} from "../state/ICertificateState";

export const certificateReducers = (
  state = initialCertificateState,
  action: CertificateActions
): ICertificateState => {
  switch (action.type) {
    case ECertificateActions.GetCertificatesSuccess: {
      return {
        ...state,
        certificates: action.payload
      };
    }

    default:
      return state;
  }
};
