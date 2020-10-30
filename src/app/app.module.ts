import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {TableLineComponent} from './components/table-line/table-line.component';
import {TableComponent} from './components/table/table.component';
import {DetailsPageComponent} from './pages/details-page/details-page.component';
import {SuchePageComponent} from './pages/suche-page/suche-page.component';
import {ApiModule} from './api/api.module';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SuchePageComponent,
    SearchBarComponent,
    HeaderComponent,
    TableComponent,
    TableLineComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,

    ApiModule.forRoot({rootUrl: environment.rootUrls.vertraege }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
