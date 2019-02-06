import { Component, OnInit, Input, forwardRef } from '@angular/core';

import { RadioOption } from './radio-option.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input()
  options: RadioOption[];

  value: any;

  onChange: any;

  constructor() { }

  ngOnInit() { }

  /** Seta o value passado no radio. */
  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

  /**
   * Método chamado pelas diretivas,
   * quando elas querem passar um valor
   * para o componente.
   */
  writeValue(obj: any): void {
    this.value = obj;
  }

  /**
   * Essa função deverá ser passada sempre
   * que o valor interno do componente mudar.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registra se o usuário entrou no componente.
   */
  registerOnTouched(fn: any): void { }

  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */

  setDisabledState?(isDisabled: boolean): void { }

}
