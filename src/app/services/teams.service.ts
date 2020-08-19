import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teamsUrl: string = 'https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/leagues/table.json?key=5YQKl3fPBERaWw5W&secret=uZVhBe2CDhoHH3KM1BwnFMchq4rnAxk5&league=25&season=2';
  constructor(private http: HttpClient) { }



  getData(): Observable<any> {
    return this.http.get<any>(this.teamsUrl);
  }
  getTeam(): Promise<any> {

    return this.getData().toPromise();
  }

}
