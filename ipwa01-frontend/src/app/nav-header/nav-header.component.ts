import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit{
  scrolled: boolean = false;
  constructor(private readonly router: Router){}
  
  ngOnInit(): void {
   window.addEventListener('scroll', () => {
    if (window.scrollY > 75) {
      this.scrolled = true
    } else {
      this.scrolled = false
        }
   })
  }
}
