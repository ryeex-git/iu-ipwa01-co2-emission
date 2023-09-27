import { AfterViewInit, Component } from '@angular/core';
import { ImprintData } from 'src/assets/models/imprintData.model';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
  providers: [ApiService],
})
export class ImprintComponent {
  imprintData: ImprintData | undefined;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getImprintData().subscribe((data) => {
      this.imprintData = data;
    });
  }
}
