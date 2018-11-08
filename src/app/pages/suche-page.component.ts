import {Component} from '@angular/core';
import {VertraegeService} from '../services/vertraege.service';

@Component({
  selector: 'gen-suche-page',
  templateUrl: './suche-page.component.html',
  styleUrls: ['./suche-page.component.scss']
})
export class SuchePageComponent {
  public sucheingabe:string = '';

  public constructor(
    public vertraegeService:VertraegeService
  ) {}
}

