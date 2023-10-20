import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContentComponent } from './body-content.component';
import { NavHeaderComponent } from '../nav-header/nav-header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './table/table.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from '../app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BodyContentComponent', () => {
  let component: BodyContentComponent;
  let fixture: ComponentFixture<BodyContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BodyContentComponent,
        NavHeaderComponent,
        FooterComponent,
        TableComponent,
      ],
      providers: [HttpClient, HttpHandler, MatSnackBar],
      imports: [
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        AgGridModule,
        AppRoutingModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(BodyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
