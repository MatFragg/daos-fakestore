export class Rating {
    id?: number;
    attendeeId: number;
    eventId: number;
    rating: number;
    ratedAt: Date;

    constructor(
        id: number,
        attendeeId: number,
        eventId: number,
        rating: number,
        ratedAt: Date
    ) {
        this.id = id;
        this.attendeeId = attendeeId;
        this.eventId = eventId;
        this.rating = rating;
        this.ratedAt = ratedAt;
    }
}
