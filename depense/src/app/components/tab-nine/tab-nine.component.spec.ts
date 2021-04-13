import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNineComponent } from './tab-nine.component';

describe('TabNineComponent', () => {
  let component: TabNineComponent;
  let fixture: ComponentFixture<TabNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
