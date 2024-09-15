import Image from "next/image";
import AddTask from "@/components/add-task";
import ViewTask from "@/components/view-task";
import CreateTaskForm from "@/components/create-task-form";

export default function Page() {
  return (
    <main>
      <CreateTaskForm />
      <ViewTask />
    </main>
  );
}
