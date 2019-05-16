import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxSectionComponentComponent } from './parallax-section-component.component';

describe('ParallaxSectionComponentComponent', () => {
  let component: ParallaxSectionComponentComponent;
  let fixture: ComponentFixture<ParallaxSectionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxSectionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxSectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
