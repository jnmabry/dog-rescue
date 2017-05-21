import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Jsonp } from '@angular/http';
import { CONFIG } from '../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PetsService {

  constructor(private _http: Http,
  private _jsonp: Jsonp) { }

  getAllPets() {
    return this._jsonp.get(CONFIG.BASEURL)
      .toPromise()
      .then( pets => {
        let jsonPets = pets.json();
        console.log(jsonPets);
        return jsonPets;
      })
      .catch(err => { console.log(err); });
  }

  headers(): Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}