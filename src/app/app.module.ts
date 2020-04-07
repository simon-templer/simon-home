import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {ProfileComponentComponent} from './components/profile-component/profile-component.component';
import {ResponsiveService} from './services/ResponsiveService';
import {ShowOnDirective} from './directives/show-on.directive';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './components/footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {HeaderComponent} from './components/header/header.component';
import {TranslationBarComponent} from './components/header/translation-bar/translation-bar.component';
import {ContactComponent} from './components/contact/contact.component';
import {SocialMediaBarComponent} from './components/contact/social-media-bar/social-media-bar.component';
import {NgsRevealModule} from 'ngx-scrollreveal';
import {ExpandableBarComponent} from './components/experiences-overview/expandable-bar/expandable-bar.component';
import {ExperiencesOverviewComponent} from './components/experiences-overview/experiences-overview.component';
import {StoreModule} from '@ngrx/store';
import {ProjectsOverviewComponent} from './components/projects-overview/projects-overview.component';
import {ProjectSummaryComponent} from './components/projects-overview/project-row/project-summary/project-summary.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatFormFieldModule} from '@angular/material';
import {CircleComponent} from './components/projects-overview/project-row/line/circle.component';
import {ProjectRowComponent} from './components/projects-overview/project-row/project-row.component';
import {ProjectAnimationStateManager} from './components/projects-overview/project-row/ProjectAnimationStateManager';
import {CertificatesOverviewComponent} from './components/certificates-overview/certificates-overview.component';
import {AngularFullpageModule} from '@fullpage/angular-fullpage';
import {appReducers} from "./store/reducer/app.reducers";
import { HomeComponent } from './components/home/home.component';

library.add(faLinkedin);

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
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
    CertificatesOverviewComponent,
    CircleComponent,
    ProjectRowComponent,
    HomeComponent,
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
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgsRevealModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    AngularFullpageModule,
    MatFormFieldModule,
    StoreModule.forRoot(appReducers)
  ],
  providers: [ResponsiveService,
    ProjectAnimationStateManager],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
