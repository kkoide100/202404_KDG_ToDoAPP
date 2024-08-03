import Image from "next/image";
import AddTask from "@/components/add-task";
import ViewTask from "@/components/view-task";

export default function Page() {
  return (
    <main>
      <AddTask />
      <ViewTask />
    </main>
  );
}
