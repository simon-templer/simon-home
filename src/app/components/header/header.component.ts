import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MenuItem} from './MenuItem';
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/state/app.state";
import {selectFullPageApi, selectFullPageState} from "../../store/selectors/full-page.selectors";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('greenState', [
      state('true', style({ opacity: '1', background: '#2DA99D'})),
      state('false', style({opacity: '1', background: 'transparent'})),
      transition('void => *', animate(0)), // <-- This is the relevant bit
      transition('* => *', animate('250ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  fullPageApiObservable = this.store.pipe(select(selectFullPageApi));
  private fullPageApi: any;
  greenState:boolean;
  fullPageStateObservable = this.store.pipe(select(selectFullPageState));

  // TODO: translation
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
    this.fullPageApiObservable.subscribe(api =>{
      this.fullPageApi = api
    } );

    this.fullPageStateObservable.subscribe(fullPageState =>{
      if (fullPageState && fullPageState.destination == 'home'){
        this.greenState = false;
      } else {
        this.greenState = true;
      }
    } );

    this.greenState=false;

  }

  moveTo(id: string) {
    if (this.fullPageApi){
      this.fullPageApi.moveTo(id);
    }
  }

}
