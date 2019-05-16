import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableBarComponent } from './expandable-bar.component';

describe('ExpandableBarComponent', () => {
  let component: ExpandableBarComponent;
  let fixture: ComponentFixture<ExpandableBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
