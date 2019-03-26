import { BirthdatePipe } from './pipes/birthdate';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { GitHubService } from './services/github.service';
import { JobtitlesComponent } from './components/jobtitles/jobtitles.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SkillsComponent,
    ProfileComponent,
    MenuComponent,
    BirthdatePipe,
    JobtitlesComponent,
    RepositoriesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    GitHubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
