import { Component, OnInit } from '@angular/core';
import {StarWarsService} from "../star-wars.service";


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Array<Object>;
  constructor(private starwarsService: StarWarsService) { }

  listPlanets(){
    let category = "planets";
    this.starwarsService.listCategory(category)
      .then(response => this.planets = response.results);
  }

  ngOnInit() {
    this.listPlanets();
  }

}
