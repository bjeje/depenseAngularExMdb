import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleAddIncomeComponent } from './little-add-income.component';

describe('LittleAddIncomeComponent', () => {
  let component: LittleAddIncomeComponent;
  let fixture: ComponentFixture<LittleAddIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleAddIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleAddIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
