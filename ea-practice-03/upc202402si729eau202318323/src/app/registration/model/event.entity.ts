export class Event {
    id:number;
    name:string;
    description:string;
    scheduleAt: Date;


    constructor(
        id: number,
        name: string,
        description: string,
        scheduleAt: Date
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.scheduleAt = scheduleAt;
    }

}
