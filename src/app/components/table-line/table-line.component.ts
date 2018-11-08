import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'gen-table-line',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.scss'],
  animations: [
    trigger('scale', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.03)',
      })),
      transition('small => large', animate('100ms ease-in')),
      transition('large => small', animate('100ms ease-out'))
    ]),
  ]
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


  public scaleState:'small' | 'large' = 'small';

}
