import { Component, OnInit } from '@angular/core';
import { Team } from '../../module/Team';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams: Team[];
  constructor(private teamsService: TeamsService) { }

  async ngOnInit() {
    let data: any;
    data = await this.teamsService.getTeam();
    this.teams = data.data.table;
  }
}
