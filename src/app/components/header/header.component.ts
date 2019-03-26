
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('logo') logo: ElementRef;
  scrollOffset:boolean;
 

  constructor() {
   }
  
  ngOnInit() {
    this.scrollOffset=false;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll($event) {
    let scrollOffset = $event.srcElement.children[0].scrollTop;
    let scrollImg = (this.logo.nativeElement as HTMLDivElement).scrollHeight;
    this.scrollOffset=false;
    if(scrollOffset>(scrollImg-50)){
      this.scrollOffset=true;
    }
  }
}
