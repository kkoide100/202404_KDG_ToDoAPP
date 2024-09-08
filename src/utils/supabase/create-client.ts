import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/database.types'

export default async function supabaseClient(){
    return await createClient<Database>(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)
}
