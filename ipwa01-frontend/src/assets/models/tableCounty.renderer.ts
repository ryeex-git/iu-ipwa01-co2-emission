import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { COUNTRY_CODES } from './country.codes';

@Component({
  selector: 'country-flag',
  template: `<img
      [src]="flagSrc"
      style="height: 0.8em; padding-right:1em"
    /><span>{{ countryName }}</span>`,
})
export class TableCountryRenderer {
  flagSrc!: string;
  countryName!: string;

  agInit(params: ICellRendererParams): void {
    const countryCode =
      COUNTRY_CODES[`${params.data.country as keyof typeof COUNTRY_CODES}`];
    this.countryName = params.data.country;
    this.flagSrc = `https://flagcdn.com/h20/${countryCode}.png`;
  }

  refresh(params: ICellRendererParams) {
    return false;
  }
}
