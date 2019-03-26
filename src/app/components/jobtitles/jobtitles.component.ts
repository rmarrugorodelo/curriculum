import { DEVELOPER } from './../../data/developer';
import { Developer } from './../../interfaces/developer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobtitles',
  templateUrl: './jobtitles.component.html',
  styleUrls: ['./jobtitles.component.css']
})
export class JobtitlesComponent implements OnInit {

  developer:Developer;
  constructor() { 
    this.developer=DEVELOPER;
  }

  ngOnInit() {
  }

}
