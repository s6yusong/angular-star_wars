import {Component, Input, OnInit} from '@angular/core';
import * as Service from '../../services';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movies;
  constructor(private utilsService: Service.UtilsService) { }
  ngOnInit(): void {
  }
  getPosterClass(name) {
    return this.utilsService.getPosterClass(name);
  }

}
