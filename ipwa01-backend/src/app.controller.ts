import { Controller, Get, HttpCode, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ImprintData, TableData } from './model/tableData.model';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Controller('api/v1')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get('tableData')
  @HttpCode(200)
  async getTableData(): Promise<TableData> {
    let tableData: TableData = await this.cacheManager.get('tableData');
    if (!tableData) {
      tableData = this.appService.getTableData();
      await this.cacheManager.set('tableData', tableData, 3600000);
    }
    return tableData;
  }

  @Get('imprint')
  @HttpCode(200)
  async getImprintData(): Promise<ImprintData> {
    let imprintData: ImprintData = await this.cacheManager.get('imprintData');
    if (!imprintData) {
      imprintData = this.appService.getImprintData();
      await this.cacheManager.set('imprintData', imprintData, 3600000);
    }
    return imprintData;
  }
}
