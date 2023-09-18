import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContentComponent } from './body-content.component';

describe('BodyContentComponent', () => {
  let component: BodyContentComponent;
  let fixture: ComponentFixture<BodyContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyContentComponent]
    });
    fixture = TestBed.createComponent(BodyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
