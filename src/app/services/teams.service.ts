import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../module/Data';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teamsUrl: string = 'https://cors-anywhere.herokuapp.com/http://livescore-api.com/api-client/leagues/table.json?key=M5nJ3x13uRSWpyqo&secret=Q7iJHRVmp7gbN2nA8LjbikfMc8JBG9Zx&league=25&season=2';
  constructor(private http: HttpClient) { }



  getData(): Observable<Data> {
    return this.http.get<Data>(this.teamsUrl);
  }



}
