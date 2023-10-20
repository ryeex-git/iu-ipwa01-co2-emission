import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { FooterComponent } from 'src/app/body-content/footer/footer.component';
import { NavHeaderComponent } from 'src/app/nav-header/nav-header.component';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent, NavHeaderComponent, FooterComponent],
      imports: [MatCardModule, AppRoutingModule],
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
