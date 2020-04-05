import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {MenuItem} from './MenuItem';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/state/app.state";
import {selectFullPageApi} from "../../store/selectors/full-page.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fullPageApiObservablr = this.store.pipe(select(selectFullPageApi));
  private fullPageApi: any;
  items: MenuItem[] = [
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

  constructor(private store: Store<AppState>,
              private translate: TranslateService) {
  }

  ngOnInit() {
    // TODO: translation
    this.translate.get('Story');

    this.fullPageApiObservablr.subscribe(api =>{
      this.fullPageApi = api
    } )
  }

  scrollTo(id: string) {
    if (this.fullPageApi){
      this.fullPageApi.moveTo(id);
    }
  }

}
