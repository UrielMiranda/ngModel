import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise'

@Injectable()
export class StarWarsService{

  constructor(private http: Http){}

  listCategory(category: string){

    let url = `http://swapi.co/api/${category}/`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.oneError);
  }

  oneError(error){
    console.log(`Error ${error} al consumir la SWAPI `);
    return Promise.reject(error.message || error);
  }

}
