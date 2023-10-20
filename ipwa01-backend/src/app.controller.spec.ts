import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [CacheModule.register()],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "TableData" JSON', async () => {
      expect(await appController.getTableData()).toStrictEqual({
        data: [
          {
            companyName: 'Dodge Motor Car Company',
            country: 'United States of America',
            emissionInTonnePerYear: 300.46,
            unitPerYear: 200000,
            companyType: ['Car Manufacturer'],
            continent: 'North America',
          },
          {
            companyName: 'Huawei GmbH',
            country: 'China',
            emissionInTonnePerYear: 400.82,
            unitPerYear: 150000000,
            companyType: [
              'Information and communications technology',
              'Infrastruccture',
              'Smart devices',
            ],
            continent: 'Asia',
          },
          {
            companyName: 'Simens AG',
            country: 'Germany',
            emissionInTonnePerYear: 150.13,
            unitPerYear: 300000000,
            companyType: ['Mobility', 'Smart devices', 'Digital Industries'],
            continent: 'Europe',
          },
          {
            companyName: 'Nintendo Co. Ltd.',
            country: 'Japan',
            emissionInTonnePerYear: 251.36,
            unitPerYear: 145000001,
            companyType: ['Hardware development', 'Software developemt'],
            continent: 'Asia',
          },
          {
            companyName: 'Shein',
            country: 'Republic of Singapore',
            emissionInTonnePerYear: 600.36,
            unitPerYear: 1600000000,
            companyType: ['Fashion and accessories'],
            continent: 'Asia',
          },
          {
            companyName: 'Renault Société Anonyme',
            country: 'France',
            emissionInTonnePerYear: 210.73,
            unitPerYear: 480000,
            companyType: ['Car Manufacturer'],
            continent: 'Europe',
          },
          {
            companyName: 'Apple Inc.',
            country: 'United States of America',
            emissionInTonnePerYear: 750.12,
            unitPerYear: 290000000,
            companyType: [
              'Information and communications technology',
              'Software developemt',
              'Hardware development',
            ],
            continent: 'North America',
          },
          {
            companyName: 'Primark Limited',
            country: 'Ireland',
            emissionInTonnePerYear: 598.06,
            unitPerYear: 986000000,
            companyType: ['Fashion and accessories', 'Home accessories'],
            continent: 'Europe',
          },
          {
            companyName: 'Logitech International S.A.',
            country: 'Switzerland',
            emissionInTonnePerYear: 137.91,
            unitPerYear: 230000000,
            companyType: ['Computer accessories'],
            continent: 'Europe',
          },
          {
            companyName: 'Netflix',
            country: 'United States of America',
            emissionInTonnePerYear: 95.34,
            unitPerYear: 1300000000,
            companyType: ['Film industry'],
            continent: 'North America',
          },
          {
            companyName: 'Toyota Motor Corporation',
            country: 'Japan',
            emissionInTonnePerYear: 520.18,
            unitPerYear: 1000000,
            companyType: ['Car Manufacturer'],
            continent: 'Asia',
          },
          {
            companyName: 'Amazon.com, Inc.',
            country: 'United States of America',
            emissionInTonnePerYear: 830.25,
            unitPerYear: 2500000000,
            companyType: [
              'E-commerce',
              'Cloud computing',
              'Artificial intelligence',
            ],
            continent: 'North America',
          },
          {
            companyName: 'Samsung Electronics Co., Ltd.',
            country: 'South Korea',
            emissionInTonnePerYear: 610.62,
            unitPerYear: 350000000,
            companyType: [
              'Information and communications technology',
              'Consumer electronics',
              'Semiconductors',
            ],
            continent: 'Asia',
          },
          {
            companyName: 'Volkswagen AG',
            country: 'Germany',
            emissionInTonnePerYear: 480.37,
            unitPerYear: 3100000,
            companyType: ['Car Manufacturer'],
            continent: 'Europe',
          },
          {
            companyName: 'Unilever PLC',
            country: 'United Kingdom',
            emissionInTonnePerYear: 420.91,
            unitPerYear: 1000000000,
            companyType: ['Consumer goods'],
            continent: 'Europe',
          },
          {
            companyName: 'Microsoft Corporation',
            country: 'United States of America',
            emissionInTonnePerYear: 570.65,
            unitPerYear: 350000000,
            companyType: [
              'Information and communications technology',
              'Software development',
              'Cloud computing',
            ],
            continent: 'North America',
          },
          {
            companyName: 'Nestlé S.A.',
            country: 'Switzerland',
            emissionInTonnePerYear: 670.21,
            unitPerYear: 1200000000,
            companyType: ['Food and beverage'],
            continent: 'Europe',
          },
          {
            companyName: 'General Electric Company',
            country: 'United States of America',
            emissionInTonnePerYear: 290.87,
            unitPerYear: 2600000,
            companyType: ['Conglomerate'],
            continent: 'North America',
          },
          {
            companyName: 'Ford Motor Company',
            country: 'United States of America',
            emissionInTonnePerYear: 410.29,
            unitPerYear: 2900000,
            companyType: ['Car Manufacturer'],
            continent: 'North America',
          },
          {
            companyName: 'Sony Corporation',
            country: 'Japan',
            emissionInTonnePerYear: 310.77,
            unitPerYear: 180000000,
            companyType: [
              'Information and communications technology',
              'Consumer electronics',
              'Entertainment',
            ],
            continent: 'Asia',
          },
          {
            companyName: 'The Coca-Cola Company',
            country: 'United States of America',
            emissionInTonnePerYear: 490.05,
            unitPerYear: 8000000000,
            companyType: ['Beverage'],
            continent: 'North America',
          },
          {
            companyName: 'Intel Corporation',
            country: 'United States of America',
            emissionInTonnePerYear: 410.96,
            unitPerYear: 700000000,
            companyType: [
              'Information and communications technology',
              'Semiconductors',
            ],
            continent: 'North America',
          },
          {
            companyName: 'Procter & Gamble Company',
            country: 'United States of America',
            emissionInTonnePerYear: 540.12,
            unitPerYear: 1800000000,
            companyType: ['Consumer goods'],
            continent: 'North America',
          },
          {
            companyName: "L'Oréal S.A.",
            country: 'France',
            emissionInTonnePerYear: 230.81,
            unitPerYear: 1300000000,
            companyType: ['Cosmetics'],
            continent: 'Europe',
          },
          {
            companyName: 'Boeing Company',
            country: 'United States of America',
            emissionInTonnePerYear: 380.67,
            unitPerYear: 500000,
            companyType: ['Aerospace'],
            continent: 'North America',
          },
          {
            companyName: 'Pfizer Inc.',
            country: 'United States of America',
            emissionInTonnePerYear: 280.41,
            unitPerYear: 100000000,
            companyType: ['Pharmaceuticals'],
            continent: 'North America',
          },
          {
            companyName: 'BMW AG',
            country: 'Germany',
            emissionInTonnePerYear: 290.75,
            unitPerYear: 2300000,
            companyType: ['Car Manufacturer'],
            continent: 'Europe',
          },
          {
            companyName: 'Nike, Inc.',
            country: 'United States of America',
            emissionInTonnePerYear: 380.88,
            unitPerYear: 340000000,
            companyType: ['Sportswear'],
            continent: 'North America',
          },
          {
            companyName: 'Dell Technologies Inc.',
            country: 'United States of America',
            emissionInTonnePerYear: 320.29,
            unitPerYear: 450000000,
            companyType: [
              'Information and communications technology',
              'Hardware development',
              'Software development',
            ],
            continent: 'North America',
          },
          {
            companyName: 'Siemens Healthineers AG',
            country: 'Germany',
            emissionInTonnePerYear: 180.45,
            unitPerYear: 160000000,
            companyType: ['Healthcare'],
            continent: 'Europe',
          },
          {
            companyName: 'The Walt Disney Company',
            country: 'United States of America',
            emissionInTonnePerYear: 290.64,
            unitPerYear: 620000000,
            companyType: ['Entertainment'],
            continent: 'North America',
          },
          {
            companyName: 'Mercedes-Benz AG',
            country: 'Germany',
            emissionInTonnePerYear: 360.12,
            unitPerYear: 1400000,
            companyType: ['Car Manufacturer'],
            continent: 'Europe',
          },
          {
            companyName: 'HSBC Holdings plc',
            country: 'United Kingdom',
            emissionInTonnePerYear: 490.02,
            unitPerYear: 3000000000,
            companyType: ['Banking and financial services'],
            continent: 'Europe',
          },
          {
            companyName: 'Merck & Co., Inc.',
            country: 'United States of America',
            emissionInTonnePerYear: 180.73,
            unitPerYear: 240000000,
            companyType: ['Pharmaceuticals'],
            continent: 'North America',
          },
          {
            companyName: 'Nokia Corporation',
            country: 'Finland',
            emissionInTonnePerYear: 140.27,
            unitPerYear: 260000000,
            companyType: [
              'Information and communications technology',
              'Network infrastructure',
            ],
            continent: 'Europe',
          },
          {
            companyName: 'Mitsubishi Corporation',
            country: 'Japan',
            emissionInTonnePerYear: 310.89,
            unitPerYear: 190000000,
            companyType: ['Conglomerate'],
            continent: 'Asia',
          },
        ],
      });
    });

    it('should return "ImprintData" JSON', async () => {
      expect(await appController.getImprintData()).toStrictEqual({
        disclaimer:
          'This is just a mockup site. All data is not real and is only for the IU IPWA module.',
        email: 'MaxMustermann@musterDomain.de',
        headOfOffice: 'Max Mustermann',
        name: 'Max Mustermann GmbH',
        number: '+49 40 534 55-0',
        postalcode: 'D-76654 Musterstadt',
        street: 'Maxer Straße 2',
      });
    });
  });
});
