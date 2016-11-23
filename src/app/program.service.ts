import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Program } from './models/program'

@Injectable()
export class ProgramService {

  constructor(private http: Http) { }

  programsUrl = "https://fathomless-falls-39203.herokuapp.com/api/programs";
  
  create(name:string) : Promise<Program>{
    return this.http
    .post(this.programsUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);
  }

  getPrograms(){
    return this.http
      .get(this.programsUrl)
      .toPromise()
      .then(res => res.json() as Program[])
      .catch(this.handleError);
  }

  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});
}
