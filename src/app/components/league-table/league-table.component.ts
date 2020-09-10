import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/teams.service';
import { SubHeaderServiceService } from '../../services/sub-header-service.service';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {

  constructor(private teamsService: TeamsService, private subHeaderService: SubHeaderServiceService) { }

  ngOnInit(): void {
    this.subHeaderService.setTitle('Premier League Table');
  }

}
