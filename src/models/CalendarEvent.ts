export class CalendarEvent {
    public summary: string;
    public startTime: string;
    public endTime: string;
    public isAllDay: boolean;

    public isDone(): boolean {
        return new Date(this.endTime) < new Date();
    }

    public static create(json: any): CalendarEvent {
        let model = new CalendarEvent;
        
        model.summary = json['summary'];
        model.startTime = json['startTime'];
        model.endTime = json['endTime'];
        model.isAllDay = json['isAllDay'];

        return model;
    }

    public static collection(array: []): CalendarEvent[] {
        let models: CalendarEvent[] = [];

        array.forEach(event => {
            models.push(CalendarEvent.create(event));
        })

        return models;
    }
}