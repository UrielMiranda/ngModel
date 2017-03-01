import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {StarshipsComponent} from "./starships/starships.component";
import {PlanetsComponent} from "./planets/planets.component";
import {PeopleComponent} from "./people/people.component";

const appRoutes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"people", component: PeopleComponent},
  {path:"planets", component: PlanetsComponent},
  {path:"starships", component: StarshipsComponent},
  {path:"**", component: HomeComponent}


];


export const appRoutingProvides: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
