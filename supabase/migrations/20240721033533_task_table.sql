create type "public"."status" as enum ('New', 'Ready', 'In Progress', 'In Review', 'Done');

create table "public"."task" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "name" text not null,
    "end_date" date,
    "detail" text,
    "status" status not null default 'New'::status
);


CREATE UNIQUE INDEX task_pkey ON public.task USING btree (id);

alter table "public"."task" add constraint "task_pkey" PRIMARY KEY using index "task_pkey";

grant delete on table "public"."task" to "anon";

grant insert on table "public"."task" to "anon";

grant references on table "public"."task" to "anon";

grant select on table "public"."task" to "anon";

grant trigger on table "public"."task" to "anon";

grant truncate on table "public"."task" to "anon";

grant update on table "public"."task" to "anon";

grant delete on table "public"."task" to "authenticated";

grant insert on table "public"."task" to "authenticated";

grant references on table "public"."task" to "authenticated";

grant select on table "public"."task" to "authenticated";

grant trigger on table "public"."task" to "authenticated";

grant truncate on table "public"."task" to "authenticated";

grant update on table "public"."task" to "authenticated";

grant delete on table "public"."task" to "service_role";

grant insert on table "public"."task" to "service_role";

grant references on table "public"."task" to "service_role";

grant select on table "public"."task" to "service_role";

grant trigger on table "public"."task" to "service_role";

grant truncate on table "public"."task" to "service_role";

grant update on table "public"."task" to "service_role";


