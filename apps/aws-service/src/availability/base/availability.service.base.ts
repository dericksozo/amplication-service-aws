/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Availability, // @ts-ignore
  EventType, // @ts-ignore
  Schedule, // @ts-ignore
  User,
} from "@prisma/client";

export class AvailabilityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AvailabilityCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AvailabilityCountArgs>
  ): Promise<number> {
    return this.prisma.availability.count(args);
  }

  async availabilities<T extends Prisma.AvailabilityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AvailabilityFindManyArgs>
  ): Promise<Availability[]> {
    return this.prisma.availability.findMany(args);
  }
  async availability<T extends Prisma.AvailabilityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AvailabilityFindUniqueArgs>
  ): Promise<Availability | null> {
    return this.prisma.availability.findUnique(args);
  }
  async createAvailability<T extends Prisma.AvailabilityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AvailabilityCreateArgs>
  ): Promise<Availability> {
    return this.prisma.availability.create<T>(args);
  }
  async updateAvailability<T extends Prisma.AvailabilityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AvailabilityUpdateArgs>
  ): Promise<Availability> {
    return this.prisma.availability.update<T>(args);
  }
  async deleteAvailability<T extends Prisma.AvailabilityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AvailabilityDeleteArgs>
  ): Promise<Availability> {
    return this.prisma.availability.delete(args);
  }

  async getEventType(parentId: number): Promise<EventType | null> {
    return this.prisma.availability
      .findUnique({
        where: { id: parentId },
      })
      .eventType();
  }

  async getSchedule(parentId: number): Promise<Schedule | null> {
    return this.prisma.availability
      .findUnique({
        where: { id: parentId },
      })
      .schedule();
  }

  async getUser(parentId: number): Promise<User | null> {
    return this.prisma.availability
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
