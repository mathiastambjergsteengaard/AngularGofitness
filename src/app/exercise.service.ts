import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'

import { Exercise } from './models/exercise'
@Injectable()
export class ExerciseService {

  constructor(private http:Http) { }

  exerciseUrl = "";
  
  add(exercise:Exercise, program_id:string) {
    this.exerciseUrl = "https://fathomless-falls-39203.herokuapp.com/api/programs/" + program_id + "/exercise";
    return this.http
      .post(this.exerciseUrl, JSON.stringify(exercise), {headers: this.headers})
      .toPromise()
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});
}
