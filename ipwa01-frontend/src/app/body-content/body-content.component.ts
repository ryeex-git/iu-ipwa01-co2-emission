import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, CellClickedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ApiService } from './../../service/api.service';
import { TableCountryRenderer } from 'src/assets/models/tableCounty.renderer';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.scss'],
  providers: [ApiService],
})
export class BodyContentComponent {}
