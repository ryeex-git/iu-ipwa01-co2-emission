import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdprComponent } from './gdpr.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NavHeaderComponent } from 'src/app/nav-header/nav-header.component';
import { FooterComponent } from 'src/app/body-content/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('GdprComponent', () => {
  let component: GdprComponent;
  let fixture: ComponentFixture<GdprComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GdprComponent, NavHeaderComponent, FooterComponent],
      providers: [HttpClient, HttpHandler],
      imports: [MatCardModule, AppRoutingModule],
    });
    fixture = TestBed.createComponent(GdprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
