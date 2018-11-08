import {Component, OnInit} from '@angular/core';
import {VertraegeService, Vertrag} from '../../services/vertraege.service';

@Component({
  selector: 'gen-suche-page',
  templateUrl: './suche-page.component.html',
  styleUrls: ['./suche-page.component.scss']
})
export class SuchePageComponent implements OnInit {
  public vertraege: Array<Vertrag> = [];

  public constructor(
    public vertraegeService:VertraegeService
  ) {}

  public ngOnInit(): void {
    this.vertraege = this.vertraegeService.vertraege;
  }

  public searchVertraege(search: string):void {
    this.vertraege = this.vertraegeService.searchVertraege(search);
  }
}

