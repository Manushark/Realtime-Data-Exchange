import { Controller, Get } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getEvents() {
    return {
      message: 'Real Time Data Exchange funcionando',
    };
  }

  @Get('db')
  getEventsFromDb() {
    return this.eventsService.getAllEvents();
  }
}
