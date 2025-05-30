"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  console.log("validatedFields", validatedFields);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  return { sucess: "Register email sent" };
};
