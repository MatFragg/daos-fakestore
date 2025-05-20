import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { HttpClient } from "@angular/common/http";
import { Attendee } from '../model/attendee.entity';
import { Observable, map } from "rxjs";
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AttendeeService extends BaseService<Attendee> {

  private baseUrl = environment.serverBasePath;
  
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/attendees';
  }

  getAllAttendees(): Observable<Attendee[]> {
    return this.getAll().pipe(
      map((responseArray: Attendee[]) => {
        return responseArray.map((attendee: Attendee) => { return attendee });
      })
    )
  }

  getAttendeeByTicketIdentifier(ticketIdentifier: string): Observable<Attendee | undefined> {
    return this.getAll().pipe(
      map((attendees: Attendee[]) =>
        attendees.find(attendee => attendee.ticketIdentifier === ticketIdentifier)
      )
    );
  }

  getCheckedInAttendeesByEventId(eventId: number): Observable<Attendee[]> {
    return this.getAll().pipe(
      map((attendees: Attendee[]) => 
      attendees.filter(attendee =>
        attendee.eventId === eventId && attendee.checkedInAt !== null
      )
    ));
  }
}
