/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Vertrag } from '../models/vertrag';

/**
 * Vertrag Controller
 */
@Injectable({
  providedIn: 'root',
})
class VertragControllerService extends __BaseService {
  static readonly getVertraegeUsingGETPath = '/vertrag';
  static readonly setVertragUsingPOSTPath = '/vertrag';
  static readonly getVertragUsingGETPath = '/vertrag/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getVertraege
   * @return OK
   */
  getVertraegeUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Vertrag>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vertrag`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Vertrag>>;
      })
    );
  }
  /**
   * getVertraege
   * @return OK
   */
  getVertraegeUsingGET(): __Observable<Array<Vertrag>> {
    return this.getVertraegeUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Vertrag>)
    );
  }

  /**
   * setVertrag
   * @param vertrag vertrag
   * @return OK
   */
  setVertragUsingPOSTResponse(vertrag: Vertrag): __Observable<__StrictHttpResponse<Vertrag>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = vertrag;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/vertrag`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Vertrag>;
      })
    );
  }
  /**
   * setVertrag
   * @param vertrag vertrag
   * @return OK
   */
  setVertragUsingPOST(vertrag: Vertrag): __Observable<Vertrag> {
    return this.setVertragUsingPOSTResponse(vertrag).pipe(
      __map(_r => _r.body as Vertrag)
    );
  }

  /**
   * getVertrag
   * @param id id
   * @return OK
   */
  getVertragUsingGETResponse(id: string): __Observable<__StrictHttpResponse<Vertrag>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vertrag/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Vertrag>;
      })
    );
  }
  /**
   * getVertrag
   * @param id id
   * @return OK
   */
  getVertragUsingGET(id: string): __Observable<Vertrag> {
    return this.getVertragUsingGETResponse(id).pipe(
      __map(_r => _r.body as Vertrag)
    );
  }
}

module VertragControllerService {
}

export { VertragControllerService }
