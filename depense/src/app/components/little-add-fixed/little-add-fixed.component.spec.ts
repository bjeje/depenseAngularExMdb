import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleAddFixedComponent } from './little-add-fixed.component';

describe('LittleAddFixedComponent', () => {
  let component: LittleAddFixedComponent;
  let fixture: ComponentFixture<LittleAddFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleAddFixedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleAddFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
