import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { MovieListPageComponent } from './components/movies/movie-list-page.component';
import { MoviesTableComponent } from './components/movies/movies-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsPageComponent } from './components/movies/movie-details-page.component';
import { CharacterListItemComponent } from './components/characters/character-list-item.component';
import { CharacterDetailsComponent } from './components/characters/character-details.component';
import { MovieListItemComponent } from './components/movies/movie-list-item.component';
import { InfoBoxComponent } from './components/movies/info-box.component';
import { CharacterCardComponent } from './components/characters/character-card.component';
import { reducers, effects } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ErrorBarComponent } from './components/error-bar/error-bar.component';
import { MovieCardComponent } from './components/movies/movie-card.component';
import { MovieViewComponent } from './components/movies/movie-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavSidebarComponent,
    MovieListPageComponent,
    MoviesTableComponent,
    MovieDetailsPageComponent,
    CharacterListItemComponent,
    CharacterDetailsComponent,
    MovieListItemComponent,
    InfoBoxComponent,
    CharacterCardComponent,
    ErrorBarComponent,
    MovieCardComponent,
    MovieViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forRoot(effects),
    EffectsModule.forFeature(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
