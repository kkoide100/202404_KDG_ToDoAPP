import SupabaseClient from "@/utils/supabase/create-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest, 
    { params }: { params: { task_id: string | undefined }},
    response: NextResponse,
) {
    const supabase = await SupabaseClient()
    const {data, error} = await supabase.from("task").select("*").eq("id", params.task_id!).single()

    if(error) return NextResponse.error()
    return NextResponse.json({data}, {status:200})
}