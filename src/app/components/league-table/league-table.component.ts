import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../module/Team';
@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {
  @Input() team: Team;
  constructor() { }

  ngOnInit(): void {

  }

}
