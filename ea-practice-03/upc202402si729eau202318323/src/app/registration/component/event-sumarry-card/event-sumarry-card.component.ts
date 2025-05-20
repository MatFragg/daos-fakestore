import { Component,Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';
import { Event } from '../../model/event.entity';
import { RatingService } from '../../../engagement/service/rating.service';
import { EventService } from '../../service/event.service';
import { AttendeeService } from '../../service/attendee.service';

/**
 * @description Component that displays a summary card for an event, including attendance and rating information
 */
@Component({
  selector: 'app-event-sumarry-card',
  imports: [MatCardModule,MatSnackBarModule,NgIf],
  templateUrl: './event-sumarry-card.component.html',
  styleUrl: './event-sumarry-card.component.css'
})
export class EventSumarryCardComponent {
  /** The event to display information for */
  @Input() event!: Event;
  /** Number of attendees who have checked in to the event */
  checkedInCount = 0;
  /** Average rating for the event, displays 'No ratings' if no ratings exist */
  averageRating: number | string = 'No ratings';
  
  /**
   * @description Creates an instance of EventSumarryCardComponent
   * @param ratingService - Service to handle event ratings
   * @param attendeeService - Service to handle event attendees
   */
  constructor(private ratingService: RatingService, private attendeeService: AttendeeService) {}

  /**
   * @description Lifecycle hook that is called after component initialization
   * Loads the initial data for checked-in attendees and average rating
   */
  ngOnInit() {
    this.loadCheckedInAttendees();
    this.loadAverageRating();
  }

  /**
   * @description Fetches and updates the count of checked-in attendees for the event
   * @private
   */
  private loadCheckedInAttendees() {
    this.attendeeService.getCheckedInAttendeesByEventId(this.event.id).subscribe(attendees => {
      this.checkedInCount = attendees.length;
      console.log('Checked-in attendees:', attendees);
    })
  }

  /**
   * @description Calculates and updates the average rating for the event
   * @private
   */
  private loadAverageRating() {
    this.ratingService.getRatingsByEventId(this.event.id).subscribe(ratings => {
      if(ratings.length > 0) {
        const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
        this.averageRating = (sum / ratings.length).toFixed(1);
      }
    })
  }
}