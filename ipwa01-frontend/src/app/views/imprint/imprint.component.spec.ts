import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintComponent } from './imprint.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NavHeaderComponent } from 'src/app/nav-header/nav-header.component';
import { FooterComponent } from 'src/app/body-content/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('ImprintComponent', () => {
  let component: ImprintComponent;
  let fixture: ComponentFixture<ImprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprintComponent, NavHeaderComponent, FooterComponent],
      providers: [HttpClient, HttpHandler],
      imports: [MatCardModule, AppRoutingModule],
    });
    fixture = TestBed.createComponent(ImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
