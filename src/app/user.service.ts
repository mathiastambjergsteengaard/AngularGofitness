import { Injectable } from '@angular/core';

import { User } from './models/user'
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';

import 'rxjs/add/operator/map'

import 'rxjs/add/operator/toPromise';
@Injectable()
export class UserService {
  public token: string;
  isLoggedIn:boolean = false;
  logIn: Subject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);
  externalBS;
  registerUrl = "https://fathomless-falls-39203.herokuapp.com/api/register"
  loginUrl = "https://fathomless-falls-39203.herokuapp.com/api/login"
  constructor(private http: Http) { 
    this.logIn.asObservable();
    this.externalBS = this.logIn;
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
                    
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: user.email, token: token }));
                    this.token = token;
                    this.isLoggedIn = true;
                    this.logIn.next(this.isLoggedIn);
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
  }

  login(email: String, password: String) {
    console.log(email, password);
        return this.http.post(this.loginUrl, JSON.stringify({ email: email, password: password }), {headers: this.headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: email, token: token }));
                    this.token = token;
                    this.isLoggedIn = true;
                    this.logIn.next(this.isLoggedIn);
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
        
        localStorage.removeItem('currentUser');
        this.token = null;
        this.isLoggedIn = false;
        this.logIn.next(this.isLoggedIn);
    }

    logged_in_obs(){
      return this.logIn.asObservable().startWith(this.isLoggedIn);
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
