import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import { TeamComponent } from './components/team/team.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectionsComponent } from './components/selections/selections.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueTableComponent,
    TeamComponent,
    HeaderComponent,
    SelectionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
