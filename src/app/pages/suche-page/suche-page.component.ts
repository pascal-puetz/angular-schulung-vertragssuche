import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VertraegeService, Vertrag} from '../../services/vertraege.service';

@Component({
  selector: 'gen-suche-page',
  templateUrl: './suche-page.component.html',
  styleUrls: ['./suche-page.component.scss']
})
export class SuchePageComponent implements OnInit {
  public vertraege: Array<Vertrag> = [];

  public form: FormGroup = this.fb.group({
    search: ['', [Validators.required]]
  });

  public constructor(
    public vertraegeService:VertraegeService,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.vertraege = this.vertraegeService.vertraege;
  }

  public searchVertraege():void {
    if (this.form.valid) {
      this.vertraege = this.vertraegeService.searchVertraege(this.form.get('search').value);
    }
  }
}

