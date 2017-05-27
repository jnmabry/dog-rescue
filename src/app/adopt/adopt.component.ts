import { Component, OnInit } from '@angular/core';
import { PetsService } from '../models/pets.service';
import { Pet } from '../models/pets.model';


@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  allPets: Pet[] = [];

  constructor(private _petsService: PetsService) { }

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets() {
    this._petsService.getAllPets()
    .then( pets => {
      this.allPets = pets;
      return pets;
    });
  }

}
