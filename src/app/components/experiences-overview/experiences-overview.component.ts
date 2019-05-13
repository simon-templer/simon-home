import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {NgsRevealService} from 'ngx-scrollreveal';

@Component({
  selector: 'app-experiences-overview',
  templateUrl: './experiences-overview.component.html',
  styleUrls: ['./experiences-overview.component.scss'],

})

export class ExperiencesOverviewComponent implements OnInit {

  barLengths = [
    '270px',
    '210px',
    '260px',
    '180px',
    '300px'];

  constructor() {
  }

  ngOnInit() {}

}
