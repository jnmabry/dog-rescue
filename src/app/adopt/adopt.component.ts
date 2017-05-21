import { Component, OnInit } from '@angular/core';
import { PetsService } from '../models/pets.service';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  constructor(private _petsService: PetsService) { }

  ngOnInit() {
    console.log(this.getAllPets());
  }

  getAllPets() {
    this._petsService.getAllPets()
    .then( pets => {
      return pets;
    });
  }

}
