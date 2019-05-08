import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger, useAnimation} from '@angular/animations';

@Component({
  selector: 'app-experiences-overview',
  templateUrl: './experiences-overview.component.html',
  styleUrls: ['./experiences-overview.component.scss'],
  animations: [
    trigger('JavaExpandAnimation', [
      state('normal', style({ 'width': '0px' })),
      state('expanded', style({ 'width': '300px' })),
      transition('normal => expanded', animate('1000ms'))
    ]),
    trigger('JavaExpandAnimation2', [
      state('normal', style({ 'width': '0px' })),
      state('expanded', style({ 'width': '250px' })),
      transition('normal => expanded', animate('1000ms 200ms'))
    ]),
    trigger('JavaExpandAnimation3', [
      state('normal', style({ 'width': '0px' })),
      state('expanded', style({ 'width': '200px' })),
      transition('normal => expanded', animate('1000ms 400ms'))
    ]),
    trigger('JavaExpandAnimation4', [
      state('normal', style({ 'width': '0px' })),
      state('expanded', style({ 'width': '320px' })),
      transition('normal => expanded', animate('1000ms 600ms'))
    ]),
    trigger('JavaExpandAnimation5', [
      state('normal', style({ 'width': '0px' })),
      state('expanded', style({ 'width': '180px' })),
      transition('normal => expanded', animate('1000ms 800ms'))
    ]),
    trigger('JavaExpandAnimation6', [
      state('normal', style({ 'width': '0px' })),
      state('expanded', style({ 'width': '160px' })),
      transition('normal => expanded', animate('1000ms 1000ms'))
    ]),
    trigger('JavaExpandAnimation7', [
      state('normal', style({ 'width': '0px' })),
      state('expanded', style({ 'width': '200px' })),
      transition('normal => expanded', animate('1000ms 1200ms'))
    ]),
  ],
})

export class ExperiencesOverviewComponent implements OnInit {
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

  ngOnInit() {
  }

}
