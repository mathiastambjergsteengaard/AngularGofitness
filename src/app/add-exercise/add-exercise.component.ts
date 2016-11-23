import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Exercise } from '../models/exercise';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._fb.group({
          name: '',
          description: '',
          set_number: 0,
          duration_minutes: 0,
          duration_seconds: 0,
          repetitions: 0,
      });
  }

}
