import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, CellClickedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ApiService } from './../../service/api.service';
import { TableCountryRenderer } from 'src/assets/models/tableCounty.renderer';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css'],
  providers: [ApiService],
})
export class BodyContentComponent {
  public columnDefs: ColDef[] = [
    { field: 'companyName' },
    { field: 'country', cellRenderer: TableCountryRenderer },
    { field: 'companyType' },
    { field: 'emissionInTonnePerYear' },
    { field: 'unitPerYear' },
    { field: 'countPerUnitProduced' },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public rowData!: any;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  constructor(private apiService: ApiService) {}

  onGridReady(params: GridReadyEvent) {
    this.apiService.getTableData().subscribe((response) => {
      for (const rowData of response.data) {
        rowData.countPerUnitProduced = Number(
          (
            (rowData.emissionInTonnePerYear / rowData.unitPerYear) *
            1000
          ).toFixed(4)
        );
      }
      this.agGrid.api.setRowData(response.data);
    });
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
}
