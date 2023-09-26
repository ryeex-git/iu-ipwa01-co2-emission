import { getLocaleDirection } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent implements OnInit {
  scrolled: boolean = false;
  localeDirection: string;

  constructor(private readonly router: Router) {
    this.localeDirection = getComputedStyle(document.body).direction;
  }

  ngOnInit(): void {}

  @HostListener('window:scroll')
  animateNagivationBar() {
    if (window.scrollY > 75) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
}
