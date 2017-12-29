import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {State} from "../models/State";

const states: State[] = [
  {name: 'California', code: 'CA'},
  {name: 'Georgia', code: 'GA'},
  {name: 'Texas', code: 'TX'}
];

@Injectable()
export class StateService {

  constructor() { }

  getStates(): Observable<State[]> {
    return Observable.create(obs => {
      obs.next(states);
      obs.complete();
    });
  }
}
