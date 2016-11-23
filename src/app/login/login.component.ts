import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../user.service';

import 'rxjs/add/operator/map'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myForm: FormGroup; 
  public isValid = true;
  public logged_in = false;
  constructor(private _fb: FormBuilder, private us : UserService) { }

  ngOnInit() {
    this.myForm = this._fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
      this.us.logged_in_obs()
      .subscribe(data =>{
          this.update();  
      });
  }
  login(email: string, password:string, valid:boolean) {
        if(valid){
          this.us.login(email, password).subscribe(res => console.log(res));
        } else {
          this.isValid = valid;
        }
        // check if model is valid
        // if valid, call API to save customer
        console.log(email, password);
    }
    update(){
    var username =  JSON.parse(localStorage.getItem('currentUser')) && JSON.parse(localStorage.getItem('currentUser')).username;
    if(username){
      this.logged_in = true;
    } else {
      this.logged_in = false;
    }
    } 

}
