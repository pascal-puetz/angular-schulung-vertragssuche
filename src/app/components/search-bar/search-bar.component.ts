import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'gen-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
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
}
