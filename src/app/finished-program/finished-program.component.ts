import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program.service'
import { FinishedProgram} from '../models/finished-program'

@Component({
  selector: 'app-finished-program',
  templateUrl: './finished-program.component.html',
  styleUrls: ['./finished-program.component.css']
})
export class FinishedProgramComponent implements OnInit {

  constructor(private ps:ProgramService) { }
  finishedprograms: FinishedProgram[];
  ngOnInit() {
    this.getFinishedPrograms();
  }

  getFinishedPrograms(): void {
    this.ps.getFinishedPrograms().then(programs => this.programs = programs);
  };

  programs: FinishedProgram[];

  addFinished(name:string, date:string){
    this.ps.createFinished(name, date)
      .then(program => {
        program = new FinishedProgram();
        program.name = name;
        program.date = date;
        this.programs.push(program)
      });
  }

}
