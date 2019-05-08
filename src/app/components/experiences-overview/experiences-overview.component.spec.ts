import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesOverviewComponent } from './experiences-overview.component';

describe('ExperiencesOverviewComponent', () => {
  let component: ExperiencesOverviewComponent;
  let fixture: ComponentFixture<ExperiencesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
