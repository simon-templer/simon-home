import {Action} from '@ngrx/store';
import {Certificate} from '../model/certificate';

export enum ECertificateActions {
  GetCertificates = '[Certificate] Get Certificates',
  GetCertificatesSuccess = '[Certificate] Get Certificates Success',
}

export class GetCertificates implements Action {
  readonly type = ECertificateActions.GetCertificates;

  constructor() {
  }
}

export class GetCertificatesSuccess implements Action {
  public readonly type = ECertificateActions.GetCertificatesSuccess;
  constructor(public payload: Certificate[]) {}
}


export type CertificateActions = GetCertificates | GetCertificatesSuccess;
