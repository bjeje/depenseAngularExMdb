import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHistogramComponent } from './home-histogram.component';

describe('HomeHistogramComponent', () => {
  let component: HomeHistogramComponent;
  let fixture: ComponentFixture<HomeHistogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHistogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHistogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
