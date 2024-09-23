import ViewTask from "@/components/view-task";
import CreateTaskForm from "@/components/create-task-form";
import supabaseClient from "@/utils/supabase/create-client";

export default async function Page() {
  const supabase = await supabaseClient();
  const { data:{user}, error} = await supabase.auth.getUser();
  console.log(user)

  return (
    <main>
      <header>
        <h1>ToDoアプリ</h1>
        {user?.email}
      </header>
      <CreateTaskForm />
      <ViewTask />
    </main>
  );
}
