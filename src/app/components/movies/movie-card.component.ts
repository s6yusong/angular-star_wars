import {Component, Input, OnInit} from '@angular/core';
import * as Service from '../../services';
import * as fromStore from "../../store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movies;
  filteredList;
  constructor(private utilsService: Service.UtilsService, private store: Store<fromStore.MoviesState>) { }

  ngOnInit(): void {
    this.store.select(fromStore.getSearchKey).subscribe(key => {
      this.filteredList = this.utilsService.filterMovieList(this.movies, key);
    });
  }
  getPosterClass(name) {
    return this.utilsService.getPosterClass(name);
  }
}
