import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { AttendeeService } from '../../service/attendee.service';
import { EventService } from '../../service/event.service';
import { RatingService } from '../../../engagement/service/rating.service';
import { Event } from '../../model/event.entity';
import { Attendee } from '../../model/attendee.entity';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { EMPTY } from 'rxjs';
import { EventSumarryCardComponent } from '../../component/event-sumarry-card/event-sumarry-card.component';


@Component({
  selector: 'app-events-view',
  imports: [MatCardModule,NgIf,EventSumarryCardComponent,TranslateModule],
  templateUrl: './events-view.component.html',
  styleUrl: './events-view.component.css'
})
export class EventsViewComponent {
  constructor(private eventService: EventService, private attendeeService: AttendeeService) {}

  events: Event[] = [];
  attendees: Attendee[] = [];

  ngOnInit() {
    this.eventService.getAllEvents().subscribe((events: Event[]) => {
      this.events = events;
      console.log(this.events);
    });

    this.attendeeService.getAllAttendees().subscribe((attendees: Attendee[]) => {
      this.attendees = attendees;
      console.log(this.attendees);
    });


  }

}
