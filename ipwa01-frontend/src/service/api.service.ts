import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableData } from 'src/assets/models/tableData.model';

@Injectable()
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  getTableData(): Observable<TableData> {
    return this.http.get<TableData>('http://localhost:3000/api/v1/tableData');
  }
}
