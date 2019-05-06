import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons/faArrowCircleUp';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() goUp = new EventEmitter();
  @Output() goDown = new EventEmitter();

  faArrowCircleUp = faArrowCircleUp;

  goUpButtonClicked() {
    console.log('in nav bar')
    this.goUp.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
