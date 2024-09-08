import supabaseClient from "@/utils/supabase/create-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { task_id: string }}) {
    const supabase = await supabaseClient()
    const {data, error} = await supabase.from("task").select("*").eq("id", params.task_id).single()

    return NextResponse.json({ data }, { status: 200 })
}