import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {ResponsiveService} from './services/ResponsiveService';
import {TranslateService} from '@ngx-translate/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "./store/state/app.state";
import {UpdateFullPageApi, UpdateFullPageState} from "./store/actions/full-page.actions";
import {selectCertificates} from "./store/selectors/certificates.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'simon-home';
  home = '../../../assets/img/Professional-resized.jpg';
  config: any;
  fullpage_api: any;
  certificateCardsWidthThreshold = 1650;
  certificatesObservable = this.store.pipe(select(selectCertificates));
  @ViewChild('divToScroll') divToScroll: ElementRef;
  private certificates: any[];
  private screenSize: any;
  private splitCertificates: any[];
  @ViewChildren('sectionRef') sectionRef: QueryList<any>;

  constructor(private _scrollToService: ScrollToService,
              private store: Store<AppState>,
              private responsiveService: ResponsiveService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');

    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['home', 'skills', 'projects', 'certificates', 'contact', 'footer'],
      menu: '#menu',
      afterLoad: (origin, destination, direction) => {
        this.store.dispatch(new UpdateFullPageState({
          destination: destination.anchor,
          direction: direction,
          origin: origin.anchor
        }))
      },
      afterResize: (width, height) => {
        if (width > this.certificateCardsWidthThreshold){
          this.splitCertificates = this.chunkArray(this.certificates, 4);
        }else {
          this.splitCertificates = this.chunkArray(this.certificates, 2);
        }
      },
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
    this.store.dispatch(new UpdateFullPageApi(this.fullpage_api))
  }

  ngOnInit() {
    this.certificatesObservable.subscribe(certificates => {
      this.certificates = certificates;
      if (window.innerWidth > this.certificateCardsWidthThreshold){
        this.splitCertificates = this.chunkArray(this.certificates, 4);
      }else {
        this.splitCertificates = this.chunkArray(this.certificates, 2);
      }
    });
    this.responsiveService.getScreenSize().subscribe(isMobile => {
      console.log('Mobile size is: ' + isMobile);
      this.screenSize = isMobile;

    });
    this.onResize();
  }

  chunkArray(myArray, chunk_size) {
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      let myChunk = myArray.slice(index, index + chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray;
  }

  onResize() {
    this.responsiveService.checkWidth();
  }

  ngAfterViewInit(): void {
    this.sectionRef.changes.subscribe(() => {
      this.ngForRendred();
    });
  }

  ngForRendred() {
    this.fullpage_api.build();
  }

}


