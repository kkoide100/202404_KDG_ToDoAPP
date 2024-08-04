"use client"

import useSWR from "swr"
import { Database } from "@/types/database.types"
import Link from "next/link"

// Taskのスキーマーを取得してくる。
type task = Database["public"]["Tables"]["task"]["Row"]

export default function ViewTask() {

    // APIからデータをFetchする関数
    async function fetcher(key: string){
        const data = await fetch(key)
        return data.json()
    }

    // SWRを使用して非同期的にデータをFetch
    const {data, error, isLoading} = useSWR("/api/task", fetcher)

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

    function TaskItem({data} : {data:task}) {
        return (
        <Link href={`/${data.id}`} className={"border rounded-md p-4 m-2 space-y-2"}>
                <div className="flex gap-4 items-center">
                    <span className="text-[14px] border rounded-md p-2">{data.status}</span>
                    <p className="text-[12px] opacity-60">{data.end_date || "期日未定"}</p>
                </div>
                <p className="text-[16px]">{data.name}</p>
                <p className="text-[14px]">{data.detail}</p>
            </Link>
        )
    }

    // データが取得できた際の処理
    return(
        <section className="container">
            <div className="flex flex-col flex-warp">
            {data.map((item:task) => <TaskItem key={item.id} data={item} />)}
            </div>
        </section>
    )
}