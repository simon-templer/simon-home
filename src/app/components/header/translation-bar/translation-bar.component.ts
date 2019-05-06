import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-translation-bar',
  templateUrl: './translation-bar.component.html',
  styleUrls: ['./translation-bar.component.scss']
})
export class TranslationBarComponent implements OnInit {

  items: MenuItem[];
  language: String;
  constructor(private translate: TranslateService) {
    this.language = translate.currentLang;
  }

  ngOnInit() {
    this.items = [
      {label: 'en', icon: 'pi pi-refresh', command: () => {
          this.useLanguage('en');
        }},
      {label: 'de', icon: 'pi pi-refresh', command: () => {
          this.useLanguage('de');
        }},
      {label: 'ru', icon: 'pi pi-refresh', command: () => {
          this.useLanguage('ru');
        }},
    ];
  }

  useLanguage(language: string) {
    this.language = language;
    this.translate.use(language);
  }
}
