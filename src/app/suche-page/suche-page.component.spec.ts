import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SuchePageComponent } from './suche-page.component';

describe('SuchePageComponent', () => {
  let component: SuchePageComponent;
  let fixture: ComponentFixture<SuchePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuchePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuchePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
