import {Component, ElementRef, ViewChild} from '@angular/core';
import {ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {ResponsiveService} from './services/ResponsiveService';
import {TranslateService} from '@ngx-translate/core';
import {Store} from "@ngrx/store";
import {AppState} from "./store/state/app.state";
import {UpdateFullPageApi, UpdateFullPageState} from "./store/actions/full-page.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simon-home';
  home = '../../../assets/img/Professional-resized.jpg';

  config: any;
  fullpage_api: any;

  @ViewChild('divToScroll') divToScroll: ElementRef;

  constructor(private _scrollToService: ScrollToService,
              private store: Store<AppState>,
              private responsiveService: ResponsiveService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');

    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['home', 'skills', 'projects', 'certificates', 'contact', 'footer'],
      menu: '#menu',
      navigation: true,
      afterLoad: (origin, destination, direction) => {
        this.store.dispatch(new UpdateFullPageState({destination: destination.anchor, direction: direction, origin: origin.anchor}))
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
    this.store.dispatch(new UpdateFullPageApi(this.fullpage_api))
  }

  ngOnInit() {
    this.responsiveService.getScreenSize().subscribe(isMobile => {
      console.log('Mobile size is: ' + isMobile);
    });
    this.onResize();
  }

  onResize() {
    this.responsiveService.checkWidth();
  }
}


