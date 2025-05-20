import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Rating } from '../model/rating.entity';
import { Observable, map } from "rxjs";
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RatingService extends BaseService<Rating> {

  private baseUrl = environment.serverBasePath;
  
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/ratings';
  }

  getAllRatings(): Observable<Rating[]> {
    return this.getAll().pipe(
      map((responseArray: Rating[]) => {
        return responseArray.map((rating: Rating) => { return rating });
      })
    )
  }

  getRatingsByEventId(eventId: number): Observable<Rating[]> {
    return this.getAll().pipe(
      map(ratings => ratings.filter(r => r.eventId === eventId))
    );
  }

  hasAttendeeRatedEvent(attendeeId: number, eventId: number): Observable<boolean> {
    return this.getAll().pipe(
      map(ratings => ratings.some(r => r.attendeeId === attendeeId && r.eventId === eventId))
    );
  }

  addRating(rating: Rating): Observable<Rating> {
    return this.http.post<Rating>(`${this.baseUrl}${this.resourceEndpoint}`, rating);
  }
}
