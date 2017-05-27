import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Jsonp } from '@angular/http';
import { CONFIG } from '../config/config';
import { Pet } from '../models/pets.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PetsService {

  constructor(private _http: Http,
  private _jsonp: Jsonp) { }

  getAllPets(): Promise<Pet[]> {
    return this._jsonp.get(CONFIG.BASEURL)
      .toPromise()
      .then( pets => {
        let jsonPets: any = pets.json();
        console.log(jsonPets);
        jsonPets = jsonPets.petfinder.pets.pet.map(pet => new Pet(pet));
        return jsonPets;
      })
      .catch(err => { console.log(err); });
  }

  headers(): Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

}