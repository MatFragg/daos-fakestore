import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Event } from '../model/event.entity';
import { Observable, map } from "rxjs";
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService<Event> {

  private baseUrl = environment.serverBasePath;

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/events';
  }

  getAllEvents(): Observable<Event[]> {
    return this.getAll().pipe(
      map((responseArray: Event[]) => {
        return responseArray.map((event: Event) => { return event});
      })
      
    )
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseUrl}${this.resourceEndpoint}/${id}`);
  }
}
