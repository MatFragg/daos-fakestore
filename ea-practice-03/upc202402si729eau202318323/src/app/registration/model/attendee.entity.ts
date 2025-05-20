export class Attendee {
    id: number;
    firstName: string;
    lastName: string;
    eventId: number;
    ticketIdentifier: string;
    checkedInAt: Date;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        eventId: number,
        ticketIdentifier: string,
        checkedInAt: Date
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.eventId = eventId;
        this.ticketIdentifier = ticketIdentifier;
        this.checkedInAt = checkedInAt;
    }
}
