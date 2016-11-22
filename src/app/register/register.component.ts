import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public myForm: FormGroup; 

  constructor(private _fb: FormBuilder, private us : UserService) { 
    
  }

    ngOnInit() {
        this.myForm = this._fb.group({
          name: '',
          email: '',
          password: '',
      });
    }

    save(model: User, isValid: boolean) {
        this.us.create(model).then(() => console.log("done"));
        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    }

}