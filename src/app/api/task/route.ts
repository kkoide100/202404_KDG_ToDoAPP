import supabaseClient from "@/utils/supabase/create-client";
import { NextRequest, NextResponse } from "next/server";
import { createTaskSchema } from "@/types/task-schema";

export async function GET(request: NextRequest) {
    const supabase = await supabaseClient()

    const {data:{user}} = await supabase.auth.getUser();
    if(!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const {data, error} = await supabase.from("task").select("*").eq("user_id", user.id)

    if(error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data, {status:200})
}

export async function POST(request:NextRequest, response: NextResponse) {
    const body = await request.json()
    const payload = createTaskSchema.parse(body);

    const supabase = await supabaseClient()

    const {data:{user}} = await supabase.auth.getUser();
    if(!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const {data, error} = await supabase.from("task").insert(payload).select("id").single()

    if(error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data, {status:200})
}