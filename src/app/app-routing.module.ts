import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { SelectionsComponent } from './components/selections/selections.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SelectionsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'league-table', component: LeagueTableComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
