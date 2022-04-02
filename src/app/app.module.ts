import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExpeduComponent } from './components/expedu/expedu.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PortfolioService } from './common/portfolio.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AboutComponent,
    ExpeduComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AboutComponent,
    ExpeduComponent,
    SkillsComponent,
    ProjectsComponent  
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
