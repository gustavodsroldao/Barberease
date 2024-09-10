"use server";

import { db } from "@/app/_lib/prisma";
import { revalidatePath } from "next/cache";

interface createBookingParams {
  userId: string;
  serviceId: string;
  date: Date;
}

export const createBooking = async (params: createBookingParams) => {
  await db.booking.create({
    data: params,
  });
  revalidatePath("/barbershops/[id]");
};
