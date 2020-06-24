import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import {MoviesServiceService} from '../app/services/movies-service.service';
import {MoviesInterface} from '../app/components/movies/interfaces/movies-interface'

describe('MoviesServiceService', () => {
  let service: MoviesServiceService;
  let httpMock: HttpTestingController;

  const mockMovieList: MoviesInterface[] = [{
    "title": "A New Hope",
    "episode_id": 4,
    "director": "George Lucas",
    "producer": "Gary Kurtz, Rick McCallum",
    "release_date": "1977-05-25",
    "created": "2014-12-10T14:23:31.880000Z",
    "edited": "2014-12-20T19:49:45.256000Z",
  }];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesServiceService],
    });
    service = TestBed.inject(MoviesServiceService);
    httpMock = TestBed.inject(HttpTestingController)
  });
  afterEach(()=> {
    httpMock.verify();
  });
  it('should retrieve movies from the API via GET', () => {
    const mockResponse: any = {
      "count": 1,
      "results": mockMovieList,
    };
    service.getMovies().subscribe(response => {
      expect(response.results.length).toEqual(1);
      expect(response).toEqual(mockResponse);
    });

    const request = httpMock.expectOne(`${service.url}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);
  });

  it('should retrieve movie details by Id from the API via GET', () => {
    const mockCharacter = mockMovieList[0];
    service.getMovieDetails('1').subscribe(mockRes => {
      expect(mockRes).toEqual(mockCharacter);
    });

    const request = httpMock.expectOne(`${service.url}1`);
    expect(request.request.method).toBe('GET');
    request.flush(mockCharacter);
  });
});
