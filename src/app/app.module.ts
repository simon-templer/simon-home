import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, TemplateRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ParallaxSectionComponentComponent } from './components/parallax-section-component/parallax-section-component.component';
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
import {NgsRevealModule} from 'ngx-scrollreveal';
import { ExpandableBarComponent } from './components/experiences-overview/expandable-bar/expandable-bar.component';
import {ExperiencesOverviewComponent} from './components/experiences-overview/experiences-overview.component';
import {StoreModule} from '@ngrx/store';
import { ProjectsOverviewComponent } from './components/projects-overview/projects-overview.component';
import { ProjectSummaryComponent } from './components/projects-overview/project-summary/project-summary.component';
import {reducers} from './store/state/app.state';

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
    ExpandableBarComponent,
    ExperiencesOverviewComponent,
    ProjectsOverviewComponent,
    ProjectSummaryComponent,
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
    InputTextModule,
    NgsRevealModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [ResponsiveService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
