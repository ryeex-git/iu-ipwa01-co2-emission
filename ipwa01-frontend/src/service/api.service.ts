import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImprintData } from 'src/assets/models/imprintData.model';
import { TableData } from 'src/assets/models/tableData.model';

@Injectable()
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  getTableData(): Observable<TableData> {
    return this.http.get<TableData>('http://localhost:3000/api/v1/tableData');
  }

  getImprintData(): Observable<ImprintData> {
    return this.http.get<ImprintData>('http://localhost:3000/api/v1/imprint');
  }
}
