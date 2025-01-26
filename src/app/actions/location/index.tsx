"use server";

import { PrismaClient } from "@prisma/client";
import prisma from "@/app/providers/prisma";

export const getLocationsAction = async () => {
  const locations = await prisma.location.findMany({
    orderBy: {
      company: "asc",
    },
    take: 60,
  });
  return locations;
};

export const addLocationAction = async (_data: FormData) => {
  const prisma = new PrismaClient();
  try {
    await prisma.location.create({
      data: {
        company: "Breathe",
        lat: 0,
        long: 0,
        street: "test",
        line: "test",
        state: "test",
        categories: {
          create: [
            {
              name: "Restaurant",
            },
          ],
        },
        image: "test",
      },
    });
  } catch (error) {
    throw new Error("Add location failed : ", error as ErrorOptions);
  }
};
