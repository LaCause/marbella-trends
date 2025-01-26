"use server";
import { cookies } from "next/headers";
import { MB_TOKEN } from "./index.model";

const API_URL = "https://reqres.in/api";

export const loginAction = async (email: string) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });

  if (!res.ok) throw new Error("Échec de l'authentification");

  const data = await res.json();
  (await cookies()).set(MB_TOKEN, data.token);
  return data;
};

export const logoutAction = async () => {
  (await cookies()).delete(MB_TOKEN);
};
