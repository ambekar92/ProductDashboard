import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcDashboardComponent } from './wc-dashboard.component';

describe('WcDashboardComponent', () => {
  let component: WcDashboardComponent;
  let fixture: ComponentFixture<WcDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
