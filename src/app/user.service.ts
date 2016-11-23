import { Injectable } from '@angular/core';

import { User } from './models/user'
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map'

import 'rxjs/add/operator/toPromise';
@Injectable()
export class UserService {
  public token: string;
  registerUrl = "https://fathomless-falls-39203.herokuapp.com/api/register"
  loginUrl = "https://fathomless-falls-39203.herokuapp.com/api/login"
  constructor(private http: Http) { 
    // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
  }

  create(user:User) : Observable<Boolean>{
    return this.http
    .post(this.registerUrl, JSON.stringify(user), {headers: this.headers})
    .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                console.log(token);
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: user.email, token: token }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
  }

  login(username: String, password: String): Observable<boolean> {
        return this.http.post(this.loginUrl, JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }


  // get() {
  //   this.http
  //   .get('https://fathomless-falls-39203.herokuapp.com/api/programs')
  //   .subscribe(res => console.log(res.json()))
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});
}
