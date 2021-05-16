import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleAddEndMonthComponent } from './little-add-end-month.component';

describe('LittleAddEndMonthComponent', () => {
  let component: LittleAddEndMonthComponent;
  let fixture: ComponentFixture<LittleAddEndMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleAddEndMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleAddEndMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
