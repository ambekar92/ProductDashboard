import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbDashboardComponent } from './abb-dashboard.component';

describe('AbbDashboardComponent', () => {
  let component: AbbDashboardComponent;
  let fixture: ComponentFixture<AbbDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbbDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
