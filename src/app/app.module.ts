import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutingProvides, routing } from "./app.routing";
import { PeopleComponent } from './people/people.component';
import { StarshipsComponent } from './starships/starships.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarWarsService } from "./star-wars.service";
import { DialogComponentComponent } from './dialog-component/dialog-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    StarshipsComponent,
    PlanetsComponent,
    DialogComponentComponent
  ],
  entryComponents:[
    DialogComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [appRoutingProvides,StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
