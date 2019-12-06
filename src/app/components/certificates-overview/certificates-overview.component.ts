import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state/app.state';
import {Certificate} from '../../store/state/certificate';

@Component({
  selector: 'app-certificates-overview',
  templateUrl: './certificates-overview.component.html',
  styleUrls: ['./certificates-overview.component.scss']
})
export class CertificatesOverviewComponent implements OnInit {

  certificates: Observable<Certificate[]>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.certificates = this.store.select('certificates');
  }

}
