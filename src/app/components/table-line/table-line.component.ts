import {Component, Input} from '@angular/core';

@Component({
  selector: 'gen-table-line',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.scss']
})
export class TableLineComponent {

  /**
   * The cols that will be displayed inside this row.
   */
  @Input() public cols: Array<string> = [];

  /**
   * A flag indicating if this row is even or odd
   */
  @Input() public even: boolean = false;

}
