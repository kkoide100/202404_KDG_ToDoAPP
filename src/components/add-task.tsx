
"use client"
import { Database } from "@/types/database.types"
import { useState, ChangeEvent } from "react"

type task = Database["public"]["Tables"]["task"]["Insert"]

export default function AddTask() {
    const [payload, setPayload] = useState<task>({name: ""})

    function onSubmit() {
        fetch("/api/task", {
            "method": "POST",
            "body": JSON.stringify(payload)
        })
    }

    const nameChange = (e: ChangeEvent<HTMLInputElement>) => setPayload({"name": e.target.value});
    return(
        <>
            <input onChange={nameChange} name="name" value={payload?.name} type="text"/>
            <button onClick={onSubmit}>ボタン</button>
        </>
    )
}