import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/database.types'

export default async function SupabaseClient(){
    return await createClient<Database>(process.env.SUPABASE_API!, process.env.SUPABASE_ANNON_KEY!)
}
