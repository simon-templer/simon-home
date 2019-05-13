import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableBarListComponent } from './expandable-bar-list.component';

describe('ExpandableBarListComponent', () => {
  let component: ExpandableBarListComponent;
  let fixture: ComponentFixture<ExpandableBarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableBarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
