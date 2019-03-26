import { Skill } from './../../interfaces/skill';
import { DEVELOPER } from './../../data/developer';
import { Developer } from './../../interfaces/developer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  developer:Developer;
  skills1:Skill[];
  skills2:Skill[];
  constructor() { 
    this.developer=DEVELOPER;
    this.getSkills();

  }

  ngOnInit() {
  }
  private getSkills(){
    let skills = this.developer.Skills;
    let div = Math.floor(skills.length/2);
    this.skills1 = skills.slice(0,div);
    this.skills2 = skills.slice(div,skills.length);
  }
}
