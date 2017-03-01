import { Component, OnInit } from '@angular/core';
import {StarWarsService} from "../star-wars.service";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starships: Array<Object>;
  constructor(private starwarsService : StarWarsService) { }

  listShips(){
    let category = "starships";
    this.starwarsService.listCategory(category)
      .then(response => this.starships = response.results);
  }

  ngOnInit() {
    this.listShips();
  }
}

