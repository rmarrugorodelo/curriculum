import { DEVELOPER } from './../../data/developer';
import { Developer } from './../../interfaces/developer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  developer:Developer;
  constructor() { 
    this.developer=DEVELOPER;
  }

}
