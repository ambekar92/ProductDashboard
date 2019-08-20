import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WCDashboardComponent } from './wc-dashboard.component';

describe('WCDashboardComponent', () => {
  let component: WCDashboardComponent;
  let fixture: ComponentFixture<WCDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WCDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WCDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
