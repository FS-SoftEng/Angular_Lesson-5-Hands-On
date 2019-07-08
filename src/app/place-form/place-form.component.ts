import { Component, OnInit } from '@angular/core';
import { FavoritePlaces } from '../models/favorite-places';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.css']
})
export class PlaceFormComponent implements OnInit {

  model:FavoritePlaces = new FavoritePlaces;

  constructor() { }

  ngOnInit() {
  }

  formSubmit() {
    console.log("Submit successfull", this.model)
  }

}
