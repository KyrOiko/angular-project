import { NgClass } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-labeled-input-field',
  imports: [MatFormFieldModule, MatInputModule, NgClass],
  templateUrl: './labeled-input-field.html',
  styleUrl: './labeled-input-field.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LabeledInputField),
      multi: true,
    },
  ],
})
export class LabeledInputField implements ControlValueAccessor {
  label = input.required<string>();
  labelAlignment = input<string>('row');
  placeholder = input<string>('');

  private _value: string = '';
  private _onChange = (value: string) => {};
  private _onTouched = () => {};

  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
    this._onChange(val);
  }

  writeValue(value: string): void {
    this._value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Implement if needed
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
  }

  onBlur(): void {
    this._onTouched();
  }
}
