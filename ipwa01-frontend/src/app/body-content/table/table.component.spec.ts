import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { ApiService } from 'src/service/api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import * as TABLE_DATA_RESPONSE from '../../../../../ipwa01-backend/src/assets/tableData.json';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let service: ApiService;
  let httpController: HttpTestingController;

  let url = 'http://localhost:3000/api/v1/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      providers: [ApiService],
      imports: [
        MatSnackBarModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        AgGridModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
    });
    fixture = TestBed.createComponent(TableComponent);
    service = TestBed.inject(ApiService);
    httpController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTableData and return an data array with tableData', () => {
    service.getTableData().subscribe((res) => {
      expect(res).toEqual(TABLE_DATA_RESPONSE);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}tableData`,
    });

    req.flush(TABLE_DATA_RESPONSE);
  });
});
