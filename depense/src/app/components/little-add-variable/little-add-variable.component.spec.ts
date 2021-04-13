import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleAddVariableComponent } from './little-add-variable.component';

describe('LittleAddVariableComponent', () => {
  let component: LittleAddVariableComponent;
  let fixture: ComponentFixture<LittleAddVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleAddVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleAddVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
