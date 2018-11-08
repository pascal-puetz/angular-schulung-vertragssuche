import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {VertraegeService, Vertrag} from '../../services/vertraege.service';

@Component({
  selector: 'gen-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  public vertrag$: Observable<Vertrag>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private vertraegeService: VertraegeService
  ) { }

  public ngOnInit():void {
    this.vertrag$ = this.activatedRoute.paramMap.pipe(
      map(params => this.vertraegeService.vertraege.find(vertrag => `${vertrag.vertragsnummer}` === params.get('vnr')))
    );
  }

}
