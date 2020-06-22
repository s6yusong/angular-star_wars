import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListPageComponent } from './components/movies/movie-list-page.component'
import { MovieDetailsPageComponent } from './components/movies/movie-details-page.component'
import { CharacterDetailsComponent } from './components/characters/character-details.component'

const routes: Routes = [
  { path: '',   redirectTo: '/movies', pathMatch: 'full' },
  {
    path: 'movies',
    component: MovieListPageComponent,
  },
  {
    path: 'movies/movie-details/:id',
    component: MovieDetailsPageComponent,
  },
  {
    path: 'characters/character-details/:id',
    component: CharacterDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '/movies'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
