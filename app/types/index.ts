import { Listing, Reservation, User } from "@prisma/client";

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt?: string | null;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt?: string | null;
  updatedAt?: string | null;
  emailVerified?: string | null;
};

export type SafeReservation = Omit<
  Reservation, 
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  listing?: SafeListing | null;
};