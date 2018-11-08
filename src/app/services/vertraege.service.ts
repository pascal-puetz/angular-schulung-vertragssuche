import { Injectable } from '@angular/core';

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

  constructor() { }

}

export interface Vertrag {
  vertragsnummer: number;
  bezeichnung: string;
  versicherungsnehmer: string;
}
