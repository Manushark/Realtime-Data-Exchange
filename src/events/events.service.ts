import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllEvents() {
    return this.prisma.exchangeEvent.findMany();
  }

  async createEvent(type: string, payload: string) {
    return this.prisma.exchangeEvent.create({
      data: { type, payload },
    });
  }
}
