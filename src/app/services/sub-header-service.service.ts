import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SubHeaderServiceService {
  public title = new BehaviorSubject('');
  constructor() { }
  setTitle(title) {
    this.title.next(title);
  }
}
