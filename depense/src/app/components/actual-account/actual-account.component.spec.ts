import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualAccountComponent } from './actual-account.component';

describe('ActualAccountComponent', () => {
  let component: ActualAccountComponent;
  let fixture: ComponentFixture<ActualAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
