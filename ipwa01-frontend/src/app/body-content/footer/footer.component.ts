import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  imprint: string = 'underlined underline-navigation nav-item';
  gdpr: string = 'underlined underline-navigation nav-item';

  @Input() activeFooterTab: string = '';

  constructor() {}

  ngOnInit(): void {
    switch (this.activeFooterTab) {
      case 'imprint':
        this.imprint = 'underlined underline-navigation-active nav-item';
        break;
      case 'gdpr':
        this.gdpr = 'underlined underline-navigation-active nav-item';
        break;
    }
  }
}
