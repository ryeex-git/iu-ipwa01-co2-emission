import { Injectable } from '@nestjs/common';
import * as TABLE_DATA_RESPONSE from './assets/tableData.json';
import { TableData } from './model/tableData.model';

@Injectable()
export class AppService {
  getTableData(): TableData {
    return TABLE_DATA_RESPONSE;
  }
}
