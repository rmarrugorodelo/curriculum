import { Developer } from './../../interfaces/developer';
import { Component, OnInit } from '@angular/core';
import { DEVELOPER } from '../../data/developer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  developer:Developer;

  constructor() {
    this.developer=DEVELOPER;
   }

}
