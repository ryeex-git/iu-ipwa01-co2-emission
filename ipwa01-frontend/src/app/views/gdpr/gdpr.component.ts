import { Component } from '@angular/core';
import { ImprintData } from 'src/assets/models/imprintData.model';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html',
  styleUrls: ['./gdpr.component.scss'],
  providers: [ApiService],
})
export class GdprComponent {
  imprintData: ImprintData | undefined;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getImprintData().subscribe((data) => {
      this.imprintData = data;
    });
  }
}
