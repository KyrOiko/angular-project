import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledInputField } from './labeled-input-field';

describe('LabeledInputField', () => {
  let component: LabeledInputField;
  let fixture: ComponentFixture<LabeledInputField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabeledInputField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabeledInputField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
