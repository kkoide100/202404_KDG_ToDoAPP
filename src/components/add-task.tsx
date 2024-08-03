
"use client"
import { Database } from "@/types/database.types"
import { useState } from "react"

import { ChangeEvent } from "react"

type task = Database["public"]["Tables"]["task"]["Insert"]

export default function AddTask() {
    const [data, setData] = useState<task>({name: ""})

    function onSubmit() {
        console.log("動いてるよ")
        fetch("/api/task", {
            "method": "POST",
            body: JSON.stringify({data})
        })
    }

    const nameChange = (e: ChangeEvent<HTMLInputElement>) => setData({"name": e.target.value});
    return(
        <>
            <input onChange={nameChange} name="name" value={data?.name} type="text"/>
            <button onClick={onSubmit}>ボタン</button>
        </>
    )
}