import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Exercise } from '../models/exercise';
import { Program } from '../models/program';
import { ExerciseService } from '../exercise.service' 
import { ProgramService } from '../program.service' 

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
  public exerciseForm: FormGroup;

  constructor(private _fb: FormBuilder, private es:ExerciseService, private ps:ProgramService) { }

  ngOnInit() {
    this.exerciseForm = this._fb.group({
          name: '',
          description: '',
          set_number: 0,
          duration_minutes: 0,
          duration_seconds: 0,
          repetitions: 0,
      });
      this.getPrograms();
  }

  add(exercise:Exercise){
    this.es.add(exercise, this.selectedProgram._id)
      .then(res => {
        this.exerciseForm = this._fb.group({
          name: '',
          description: '',
          set_number: 0,
          duration_minutes: 0,
          duration_seconds: 0,
          repetitions: 0,
        });
      });
    }
    getPrograms(): void {
      this.ps.getPrograms().then(programs => this.programs = programs);
    };

    onChange(program){
      this.selectedProgram = program;
      console.log(this.selectedProgram);
    }
    selectedProgram: Program; 
    programs: Program[];
  }
