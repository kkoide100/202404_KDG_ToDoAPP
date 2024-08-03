"use client"

import useSWR from "swr"
import { Database } from "@/types/database.types"
import Link from "next/link"

// Taskのスキーマーを取得してくる。
type task = Database["public"]["Tables"]["task"]["Row"]

export default function Page({ params }: { params: { task_id: string }}) {

    // APIからデータをFetchする関数
    async function fetcher(key: string){
        const data = await fetch(key)
        return data.json()
    }

    // SWRを使用して非同期的にデータをFetch
    const {data, error, isLoading} = useSWR(`/api/task/${params.task_id}`, fetcher)

    // Loading中の処理
    if (isLoading) {
        return(
            <section>isLoading...</section>
        )
    }

    // Error発生時の処理
    if (error) {
        return(
            <section>ERROR!...</section>
        )
    }

    // データが取得できた際の処理
    return(
        <section className="container">
            <p>
                {data.data.status} <br />
                {data.data.name}<br />
                {data.data.end_date}<br />
                {data.data.detail}<br />
            </p>
        </section>
    )
}