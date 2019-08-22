import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobcardGenerationComponent } from './jobcard-generation.component';

describe('JobcardGenerationComponent', () => {
  let component: JobcardGenerationComponent;
  let fixture: ComponentFixture<JobcardGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobcardGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobcardGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
