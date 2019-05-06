import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';
import {ScrollToService} from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _scrollToService: ScrollToService,
              private translate: TranslateService) {
  }

  items: MenuItem[];

  ngOnInit() {
    // TODO: translation
    this.translate.get('Story')
    this.items = [
      {
        label: 'About Me', command: () => {
          this.onUp('profile');
        }
      },
      {
        label: 'What i do'
      },
      {
        label: 'Skills'
      },
      {
        label: 'Projects'
      },
      {
        label: 'Contact', command: () => {
          this.onUp('contact');
        }
      },
    ];
  }

  onUp(target) {
    this._scrollToService
      .scrollTo({
        target: target
      })
      .subscribe(
        value => { console.log(value); },
        err => console.error(err) // Error is caught and logged instead of thrown
      );
  }

}
