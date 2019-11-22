import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parallax-section-component',
  templateUrl: './parallax-section-component.component.html',
  styleUrls: ['./parallax-section-component.component.scss']
})
export class ParallaxSectionComponentComponent implements OnInit {
  @Input()
  customImageUrl: string;
  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
