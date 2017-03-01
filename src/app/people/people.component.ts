import { Component, OnInit } from '@angular/core';
import {StarWarsService} from "../star-wars.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Array<Object>;

  constructor(private starwarsService: StarWarsService) { }

  listCharacters(){
    let category = "people";
    this.starwarsService.listCategory(category)
      .then(response => this.people = response.results);
  }


  ngOnInit() {

    this.listCharacters();
  }

}
