import { DEVELOPER } from './../../data/developer';
import { Developer } from './../../interfaces/developer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jobtitles',
  templateUrl: './jobtitles.component.html',
  styleUrls: ['./jobtitles.component.css']
})
export class JobtitlesComponent {

  developer:Developer;
  constructor() { 
    this.developer=DEVELOPER;
  }
}
