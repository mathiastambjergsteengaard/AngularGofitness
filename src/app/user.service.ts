import { Injectable } from '@angular/core';

import { User } from './models/user'
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class UserService {
  registerUrl = "https://fathomless-falls-39203.herokuapp.com/api/register"
  constructor(private http: Http) { }

  create(user:User): Promise<User> {
  return this.http
    .post(this.registerUrl, JSON.stringify({name: user.name, email: user.email, password: user.password}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});
}
