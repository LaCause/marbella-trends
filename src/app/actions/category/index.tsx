"use server";

import prisma from "@/app/providers/prisma";
import { Category } from "@prisma/client";

export const addCategory = async (data: Category) => {
  try {
    await prisma.category.create({
      data: {
        name: data.name,
      },
    });
    console.log("Catégorie enregistrée");
  } catch (error) {
    console.error("Erreur lors de l'ajout de la catégorie:", error);
    throw new Error("Add category failed : ", error as ErrorOptions);
  }
};

export const removeCategory = async (id: number) => {
  try {
    await prisma.category.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    throw new Error("Remove category failed : ", error as ErrorOptions);
  }
};

export const getCategories = async () => {
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (error) {
    throw new Error("Get categories failed : ", error as ErrorOptions);
  }
};
