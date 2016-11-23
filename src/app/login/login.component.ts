import { Component, OnInit } from '@angular/core';
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

  constructor(private _fb: FormBuilder, private us : UserService) { }

  ngOnInit() {
    this.myForm = this._fb.group({
          email: '',
          password: '',
      });
  }
  login(email: String, password:String) {
        
        this.us.login(email, password).subscribe(res => console.log(res));
        console.log(this.us.token);
        // check if model is valid
        // if valid, call API to save customer
        console.log(email, password);
    }

}
