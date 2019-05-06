import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, TemplateRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ParallaxSectionComponentComponent } from './parallax-section-component/parallax-section-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ResponsiveService } from './services/ResponsiveService';
import { ShowOnDirective } from './directives/show-on.directive';
import { CommonModule } from '@angular/common';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HeaderComponent } from './components/header/header.component';
import {MenubarModule} from 'primeng/menubar';
import { TranslationBarComponent } from './components/header/translation-bar/translation-bar.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputTextModule} from 'primeng/inputtext';
import { ContactComponent } from './components/contact/contact.component';
import { SocialMediaBarComponent } from './components/contact/social-media-bar/social-media-bar.component';

library.add(faLinkedin);

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ParallaxSectionComponentComponent,
    ProfileComponentComponent,
    ShowOnDirective,
    FooterComponent,
    HeaderComponent,
    TranslationBarComponent,
    ContactComponent,
    SocialMediaBarComponent,
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  }),
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    AppRoutingModule,
    CardModule,
    FieldsetModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MenubarModule,
    SplitButtonModule,
    InputTextModule
  ],
  providers: [ResponsiveService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
