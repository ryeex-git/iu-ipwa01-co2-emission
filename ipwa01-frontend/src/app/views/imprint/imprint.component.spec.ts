import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintComponent } from './imprint.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NavHeaderComponent } from 'src/app/nav-header/nav-header.component';
import { FooterComponent } from 'src/app/body-content/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ApiService } from 'src/service/api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import * as IMPRINT_DATA_RESPONSE from '../../../../../ipwa01-backend/src/assets/imprintData.json';

describe('ImprintComponent', () => {
  let component: ImprintComponent;
  let fixture: ComponentFixture<ImprintComponent>;
  let service: ApiService;
  let httpController: HttpTestingController;

  let url = 'http://localhost:3000/api/v1/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprintComponent, NavHeaderComponent, FooterComponent],
      providers: [ApiService],
      imports: [MatCardModule, AppRoutingModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(ImprintComponent);
    service = TestBed.inject(ApiService);
    httpController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getImprintData and return an data array with imprintData', () => {
    service.getImprintData().subscribe((res) => {
      expect(res).toEqual(IMPRINT_DATA_RESPONSE);
    });

    const req = httpController.match(`${url}imprint`);

    expect(req.length).toEqual(2);
  });
});
