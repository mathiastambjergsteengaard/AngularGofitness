import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../user.service';

import 'rxjs/add/operator/map'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public myForm: FormGroup; 
  public isValid = true; 
  constructor(private _fb: FormBuilder, private us : UserService) { 
    
  }

    ngOnInit() {
        this.myForm = this._fb.group({
          name: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', Validators.required],
      });
    }

    save(model: User, isValid: boolean) {
        if(isValid){
          this.us.create(model).subscribe(res => console.log(res));          
        } else {
          this.isValid = isValid; 
        }
        console.log(this.us.token);
        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    }

}
