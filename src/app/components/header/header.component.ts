import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {MenuItem} from './MenuItem';

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
    this.translate.get('Story');

    this.items = [
      {
        id: 'profile',
        i18nKey: 'header.profile'
      },
      {
        id: 'skills',
        i18nKey: 'header.skills'
      },
      {
        id: 'projects',
        i18nKey: 'header.projects'
      },
      {
        id: 'certificates',
        i18nKey: 'header.certificates'
      },
      {
        id: 'contact',
        i18nKey: 'header.contact'
      }
    ];
  }

  scrollTo(id: string) {
    this._scrollToService
      .scrollTo({
        target: id
      })
      .subscribe(
        value => { console.log(value); },
        err => console.error(err) // Error is caught and logged instead of thrown
      );
  }

}
