import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, CellClickedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css'],
  providers: [ApiService],
})
export class BodyContentComponent {
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'companyName' },
    { field: 'country' },
    { field: 'companyType' },
    { field: 'emissionInTonnePerYear' },
    { field: 'unitPerYear' },
    { field: 'countPerUnitProcued' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData!: any;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private apiService: ApiService) {}

  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.apiService.getTableData().subscribe((data) => {
      console.log(data);
      console.log(data['data']);
      //TODO Need to edit values to match the columnDefs
    });
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
