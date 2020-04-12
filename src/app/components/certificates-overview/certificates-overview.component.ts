import {Component, Input, OnInit} from '@angular/core';
import {Certificate} from '../../store/model/certificate';

@Component({
  selector: 'app-certificates-overview',
  templateUrl: './certificates-overview.component.html',
  styleUrls: ['./certificates-overview.component.scss']
})
export class CertificatesOverviewComponent implements OnInit {
  @Input()
  certificates: Certificate[];

  constructor() {}

  ngOnInit() {}

}
