import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-expandable-bar-list',
  templateUrl: './expandable-bar-list.component.html',
  styleUrls: ['./expandable-bar-list.component.scss']
})
export class ExpandableBarListComponent implements OnInit {

  constructor() { }

  @Input() barExpandWidths: string;

  ngOnInit() {
  }

}
