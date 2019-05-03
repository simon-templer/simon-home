import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() goUp = new EventEmitter();
  @Output() goDown = new EventEmitter();

  goUpButtonClicked() {
    console.log('in nav bar')
    this.goUp.emit();
  }

  goDownButtonClicked() {
    this.goDown.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
