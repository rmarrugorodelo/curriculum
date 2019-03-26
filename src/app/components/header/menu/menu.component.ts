import { AppConstant } from './../../../app.constant';
import { Component, OnInit, Input, DoCheck, OnChanges, AfterContentChecked } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() scrollOffset:boolean;
  languages;
  language="es";
  constructor(private translate:TranslateService) {
    this.languages=AppConstant.LANGUAGES;
   }

  ngOnInit() {
  }
  changeLanguage(){
    console.log(this.language)
    this.translate.use(this.language);
  }
 
}
