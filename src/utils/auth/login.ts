"use server";
import "server-only";

import { redirect } from "next/navigation";
import supabaseClient from "@/utils/supabase/create-client";

export const login = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await supabaseClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if(error){
    return redirect("/sign-in?message:error");
  }
  return redirect("/");
};