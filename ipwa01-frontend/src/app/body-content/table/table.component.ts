import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, CellClickedEvent } from 'ag-grid-community';
import { debounceTime } from 'rxjs';
import { TableCountryRenderer } from 'src/assets/models/tableCounty.renderer';
import { TableDropdownFilter } from 'src/interface/table.interface';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  continents: TableDropdownFilter[] = [];
  countrys: TableDropdownFilter[] = [];
  selectedContinents: TableDropdownFilter[] = [];
  selectedCountrys: TableDropdownFilter[] = [];
  value: string = '';

  public userInput = new FormGroup({
    companyName: new FormControl(),
    country: new FormControl(),
    continent: new FormControl(),
  });

  public columnDefs: ColDef[] = [
    {
      field: 'companyName',
      headerTooltip: 'Company Name',
      filter: 'agTextColumnFilter',
      sort: 'asc',
      sortIndex: 0,
    },
    {
      field: 'country',
      headerTooltip: 'Country',
      cellRenderer: TableCountryRenderer,
      sort: 'asc',
      sortIndex: 1,
    },
    { field: 'companyType', headerTooltip: 'Company Type', filter: false },
    {
      field: 'emissionInTonnePerYear',
      headerTooltip: 'Emission in tonne per year',
      filter: false,
    },
    { field: 'unitPerYear', headerTooltip: 'Unit per year', filter: false },
    {
      field: 'countPerUnitProduced',
      headerTooltip: 'Emission count per unit produced',
      filter: false,
    },
    {
      field: 'continent',
      hide: true,
    },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    flex: 1,
  };

  public rowData!: any;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  constructor(private apiService: ApiService, private _snackBar: MatSnackBar) {}

  ngAfterViewInit(): void {
    this.userInput.valueChanges.pipe(debounceTime(500)).subscribe((data) => {
      this.agGrid.api.setFilterModel({
        companyName: {
          type: 'contains',
          filter: data.companyName,
        },
        country: {
          filterType: 'text',
          operator: 'OR',
          conditions: data.country,
        },
        continent: {
          filterType: 'text',
          operator: 'OR',
          conditions: data.continent,
        },
      });
    });
  }

  onGridReady(params: GridReadyEvent) {
    this.apiService.getTableData().subscribe((response) => {
      for (const rowData of response.data) {
        rowData.countPerUnitProduced = Number(
          (
            (rowData.emissionInTonnePerYear / rowData.unitPerYear) *
            1000
          ).toFixed(4)
        );

        if (!this.continents.some((x) => x.filter === rowData.continent)) {
          this.continents.push({
            type: 'contains',
            filter: rowData.continent,
          });
        }
        if (!this.countrys.some((x) => x.filter === rowData.country)) {
          this.countrys.push({
            type: 'contains',
            filter: rowData.country,
          });
        }
        this.continents.sort((a, b) => a.filter.localeCompare(b.filter));
        this.countrys.sort((a, b) => a.filter.localeCompare(b.filter));
      }
      this.agGrid.api.setRowData(response.data);
    });
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  onclearSelection() {
    this.selectedContinents = [];
    this.selectedCountrys = [];
    this.value = '';
    this._snackBar.open('Sorting of table cleared!', 'OK', {
      duration: 2000,
    });
  }
}
