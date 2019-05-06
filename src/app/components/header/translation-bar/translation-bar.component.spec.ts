import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationBarComponent } from './translation-bar.component';

describe('TranslationBarComponent', () => {
  let component: TranslationBarComponent;
  let fixture: ComponentFixture<TranslationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
