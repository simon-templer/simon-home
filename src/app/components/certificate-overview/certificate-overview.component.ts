import { Component, OnInit } from '@angular/core';
import {Certificate} from '../../store/state/certificate';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';

@Component({
  selector: 'app-certificate-overview',
  templateUrl: './certificate-overview.component.html',
  styleUrls: ['./certificate-overview.component.scss']
})
export class CertificateOverviewComponent implements OnInit {
  certificates: Certificate[];
  constructor(private store: Store<AppState>) {
    store.select('certificates').subscribe(
      certificates => {
        this.certificates = certificates as Certificate[];
      });
  }

  ngOnInit() {}

}
