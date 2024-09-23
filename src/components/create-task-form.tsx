'use client'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { createTaskSchema } from "@/types/task-schema"

export default function CreateTaskForm() {
    const form = useForm<z.infer<typeof createTaskSchema>>({
        resolver: zodResolver(createTaskSchema),
        defaultValues: {},
    });
    const { handleSubmit, control, formState: { errors }, register } = form;

    const onSubmit = async (payload: z.infer<typeof createTaskSchema>) => {
        const res = await fetch("/api/task", {
            method: 'POST',
            body: JSON.stringify(
                payload,
            ),
            cache: 'no-cache',
        });
        const data = await res.json();
        return data;
    };

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} type="text" />
            <button type="submit">タスクを登録する</button>
        </form>
        {errors.name && <span>{errors.name.message}</span>}
        </>
    )
}