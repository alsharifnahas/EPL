import { Component, OnInit } from '@angular/core';
import { Team } from '../../module/Team';
import { TeamsService } from '../../services/teams.service';
import { SubHeaderServiceService } from '../../services/sub-header-service.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams: Team[];
  constructor(private teamsService: TeamsService, private subHeaderService: SubHeaderServiceService) { }

  ngOnInit() {
    this.teamsService.getData().subscribe(team => this.teams = team.data.table);
    console.log(this.teams);
    this.subHeaderService.setTitle('Teams');
  }
}
