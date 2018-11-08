import {Component, Input} from '@angular/core';

@Component({
  selector: 'gen-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public title:string = '';
}
