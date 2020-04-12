import {Component, Input, OnInit} from '@angular/core';
import {Certificate} from "../../../store/model/certificate";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.scss'],
  animations: [
    trigger('zoomAnimation', [
      state('true', style({
        transform: ' scale(1.05)',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }), {params: {width: '3em'}}),
      state('false', style({
        transform: ' scale(1)',
        backgroundColor: 'transparent'
      })),
      transition('true <=> false', animate('300ms')),
    ]),

  ]
})
export class CertificateCardComponent implements OnInit {

  @Input()
  certificate: Certificate;
  expandState = false;

  constructor() { }

  ngOnInit() {
  }

  mouseEnter(divA: string) {
    this.expandState = true;
  }

  mouseLeave(divA: string) {
    this.expandState = false;
  }

}
