import {Certificate} from "../model/certificate";
import certificates from '../model/certificates.json';

export interface ICertificateState {
  certificates: Certificate[];
}

export const initialCertificateState: ICertificateState = {
  certificates: certificates,
};
