import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'gen-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchBarComponent),
      multi: true
    }
  ]
})
export class SearchBarComponent implements ControlValueAccessor {
  /**
   * Input for customizing the placeholder shown.
   * @type {string}
   */
  @Input() public placeholder:string = 'Suche';

  /**
   * Input for setting an initial value.
   * @type {string}
   */
  @Input() public value:string = '';

  /**
   * Triggered when the user wants to start the search process.
   *
   * $event will get the value of the search entry
   *
   * use like this:
   *
   * (search)="myVar = $event"
   * or
   * (search)="triggerSearch($event)"
   *
   * @type {EventEmitter<string>}
   */
  @Output() public search: EventEmitter<string> = new EventEmitter<string>();

  private onValueChanged: (value:string) => void;

  public changeValue(value: string): void {
    this.value = value;
    if (this.onValueChanged) {
      this.onValueChanged(value);
    }
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(onValueChanged: (value:string) => void): void {
    this.onValueChanged = onValueChanged;
  }

  public registerOnTouched(fn: () => void): void {}
}
