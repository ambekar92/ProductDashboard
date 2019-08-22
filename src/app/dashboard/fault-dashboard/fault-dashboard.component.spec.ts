import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultDashboardComponent } from './fault-dashboard.component';

describe('FaultDashboardComponent', () => {
  let component: FaultDashboardComponent;
  let fixture: ComponentFixture<FaultDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
