import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { RatingService } from '../../service/rating.service';
import {AttendeeService} from '../../../registration/service/attendee.service';
import { EMPTY, switchMap } from 'rxjs';
import { Rating } from '../../model/rating.entity';

@Component({
  selector: 'app-event-rating',
  imports: [CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TranslateModule],
  templateUrl: './event-rating.component.html',
  styleUrl: './event-rating.component.css'
})
export class EventRatingComponent {
  ratingForm = new FormGroup({
    tickedIdentifier: new FormControl('',Validators.required),
    rating: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(5)]),
  });

  message: string = '';
  messageType: 'success' | 'error' | '' = '';

  constructor(private attendeeService: AttendeeService,
    private ratingService: RatingService) { }

  onSubmit() {
    if(this.ratingForm.invalid) {
      return;
    }

    const ticketIdentifier = this.ratingForm.get('tickedIdentifier')?.value;
    const ratingValue = this.ratingForm.get('rating')?.value;

    this.attendeeService.getAttendeeByTicketIdentifier(ticketIdentifier!)
    .pipe(
      switchMap(attendee => {
      if (!attendee) {
      this.message = 'Invalid ticket identifier';
      this.messageType = 'error';
      return EMPTY;
    }


      if(!attendee.checkedInAt) {
        this.message = 'You can only rate events you have attended to';
            this.messageType = 'error';
            return EMPTY;
      }

      return this.ratingService.hasAttendeeRatedEvent(attendee.id, attendee.eventId)
          .pipe(
              switchMap(hasRated => {
                if (hasRated) {
                  this.message = 'You already rated this event';
                  this.messageType = 'error';
                  return EMPTY;
                }

                // Crea la nueva calificación
                const newRating: Rating = {
                  attendeeId: attendee.id,
                  eventId: attendee.eventId,
                  rating: ratingValue!,
                  ratedAt: new Date(),
                };

                return this.ratingService.addRating(newRating);
              })
            );
    }))
    .subscribe({
        next: () => {
          this.message = 'Event successfully rated';
          this.messageType = 'success';
          this.ratingForm.reset();
        },
        error: () => {
          this.message = 'An error occurred while rating the event';
          this.messageType = 'error';
        }
      });

  }
}
