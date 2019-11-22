import * as CertificateActions from '../actions/certificate.actions';

import certificates from '../state/certificates.json';
import {Certificate} from '../state/certificate';


// Section 2
export function certificateReducer(state: Certificate[] = certificates, action: CertificateActions.Actions) {

  // Section 3
  switch (action.type) {
    case CertificateActions.ADD_CERTIFICATE:
      return [...state, action.payload];
    default:
      return state;
  }
}

