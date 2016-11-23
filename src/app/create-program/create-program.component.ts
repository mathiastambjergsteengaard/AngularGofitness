import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program.service'
import { Program} from '../models/program'

@Component({
  selector: 'app-create-program',
  templateUrl: './create-program.component.html',
  styleUrls: ['./create-program.component.css']
})
export class CreateProgramComponent implements OnInit {

  constructor(private ps:ProgramService) { }

  ngOnInit() {
    this.getPrograms();
  }

  getPrograms(): void {
    this.ps.getPrograms().then(programs => this.programs = programs);
  };

  programs: Program[];

  add(name:string){
    this.ps.create(name)
      .then(program => {
        program = new Program();
        program.name = name;
        this.programs.push(program)
      });
  }

}
