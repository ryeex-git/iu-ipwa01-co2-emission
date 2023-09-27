import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { TableData } from './model/tableData.model';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tableData')
  @HttpCode(200)
  getTableData(): TableData {
    return this.appService.getTableData();
  }

  @Get('imprint')
  @HttpCode(200)
  getImprintData(): any {
    return this.appService.getImprintData();
  }
}
