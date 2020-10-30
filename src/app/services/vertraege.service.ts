import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {VertragControllerService} from '../api/services';

@Injectable({
  providedIn: 'root'
})
export class VertraegeService {

  public vertraege: Array<Vertrag> = [{
    vertragsnummer: 123123,
    bezeichnung: 'Haftpflicht',
    versicherungsnehmer: 'Max Mustermann'
  }, {
    vertragsnummer: 231231,
    bezeichnung: 'Haftpflicht',
    versicherungsnehmer: 'Erika Mustermann'
  }, {
    vertragsnummer: 4352234,
    bezeichnung: 'Haftpflicht',
    versicherungsnehmer: 'Hans Janßen'
  }, {
    vertragsnummer: 62347456,
    bezeichnung: 'Haftpflicht',
    versicherungsnehmer: 'Jutta Richter'
  }, {
    vertragsnummer: 654672134,
    bezeichnung: 'Haftpflicht',
    versicherungsnehmer: 'Hugo Mayer'
  }];

  constructor(
    private vertraegeApi:VertragControllerService
  ) {
  }

  public getVertraege():Observable<Array<Vertrag>> {
    // tslint:disable-next-line:no-any
    return this.vertraegeApi.getVertraegeUsingGET() as any;
  }

  public searchVertraege(search: string): Array<Vertrag> {
    search = search.toLowerCase();

    return this.vertraege.filter(vertrag =>
      vertrag.versicherungsnehmer.toLowerCase().indexOf(search) > -1
      || vertrag.bezeichnung.toLowerCase().indexOf(search) > -1
      || `${vertrag.vertragsnummer}`.indexOf(search) > -1
    );
  }
}

export interface Vertrag {
  vertragsnummer: number;
  bezeichnung: string;
  versicherungsnehmer: string;
}
