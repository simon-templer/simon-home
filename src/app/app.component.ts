import {Component, ElementRef, ViewChild} from '@angular/core';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { ResponsiveService } from './services/ResponsiveService';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simon-home';

  @ViewChild('divToScroll') divToScroll: ElementRef;

  constructor(private _scrollToService: ScrollToService,
    private responsiveService: ResponsiveService,
    private translate: TranslateService) {
      translate.setDefaultLang('en');
      translate.use('en');
    }


  ngOnInit () {
    this.responsiveService.getScreenSize().subscribe( isMobile =>{
        console.log('Mobile size is: ' + isMobile)
    });
    this.onResize();
  }

  onResize() {
    this.responsiveService.checkWidth();
  }

  onUp() {
    // this._scrollToService
    //   .scrollTo({
    //     target: 'target1'
    //   })
    //   .subscribe(
    //     value => { console.log(value); },
    //     err => console.error(err) // Error is caught and logged instead of thrown
    //   );
console.log("-------------->");
    this.divToScroll.nativeElement.scrollTop = 30;
  }

  onDown() {
  }

  useLanguage(language: string) {
    this.translate.use(language);
}

}


