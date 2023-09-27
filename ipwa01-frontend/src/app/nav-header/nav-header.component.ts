import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { getLocaleDirection } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent implements OnInit {
  scrolled: boolean = false;
  localeDirection: string;
  homeClass: string = 'underlined underline-navigation nav-item';
  aboutClass: string = 'underlined underline-navigation nav-item';
  faqClass: string = 'underlined underline-navigation nav-item';

  @Input() activeNavTab: string = '';
  @Input() disableScrolled: boolean | null = null;

  constructor() {
    this.localeDirection = getComputedStyle(document.body).direction;
  }

  ngOnInit(): void {
    switch (this.activeNavTab) {
      case 'home':
        this.homeClass = 'underlined underline-navigation-active nav-item';
        break;
      case 'about':
        this.aboutClass = 'underlined underline-navigation-active nav-item';
        break;
      case 'faq':
        this.faqClass = 'underlined underline-navigation-active nav-item';
        break;
    }
    if (this.disableScrolled !== null) {
      this.scrolled = this.disableScrolled;
    }
  }

  @HostListener('window:scroll')
  animateNagivationBar() {
    if (!this.disableScrolled) {
      if (window.scrollY > 75) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    }
  }
}
