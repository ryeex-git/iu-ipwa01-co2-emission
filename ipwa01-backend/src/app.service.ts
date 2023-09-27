import { Injectable } from '@nestjs/common';
import * as TABLE_DATA_RESPONSE from './assets/tableData.json';
import * as IMPRINT_DATA_RESPONSE from './assets/imprintData.json';
import { TableData } from './model/tableData.model';

@Injectable()
export class AppService {
  getTableData(): TableData {
    return TABLE_DATA_RESPONSE;
  }

  getImprintData() {
    return IMPRINT_DATA_RESPONSE;
  }
}
