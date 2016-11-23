import { Component } from '@angular/core';
import {UserService} from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gofitness';
  login_message;
  logged_out = true;
  constructor(private us:UserService){
      this.us.logged_in_obs()
      .subscribe(data =>{
        this.update();              
      });

  }
  logout(){
    console.log('logout');
    this.us.logout();
    this.login_message = "You are not logged in";
    this.logged_out = true;
  }

  update(){
    var username = JSON.parse(localStorage.getItem('currentUser')) && JSON.parse(localStorage.getItem('currentUser')).username;
    if(username){
      this.login_message = "You are logged in as " + username;
      this.logged_out = false;
    } else {
      this.login_message = "You are not logged in";
    }
  }
}
