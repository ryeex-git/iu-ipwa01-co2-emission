import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderComponent } from './nav-header.component';
import { AppRoutingModule } from '../app-routing.module';

describe('NavHeaderComponent', () => {
  let component: NavHeaderComponent;
  let fixture: ComponentFixture<NavHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavHeaderComponent],
      imports: [AppRoutingModule],
    });
    fixture = TestBed.createComponent(NavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
