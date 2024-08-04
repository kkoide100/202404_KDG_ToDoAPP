import SupabaseClient from "@/utils/supabase/create-client";
import { NextRequest, NextResponse } from "next/server";
import { Database } from "@/types/database.types";

type task = Database["public"]["Tables"]["task"]["Insert"]

export async function GET(request: NextRequest) {
    const supabase = await SupabaseClient()
    const {data, error} = await supabase.from("task").select("*")

    if(error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data, {status:200})
}

export async function POST(request:NextRequest, response: NextResponse) {
    let body = await request.json()

    const payload:task = {
        name: body.name,
    }

    const supabase = await SupabaseClient()
    const {data, error} = await supabase.from("task").insert(payload).select("id").single()

    if(error) return NextResponse.error
    return NextResponse.json(data, {status:200})
}