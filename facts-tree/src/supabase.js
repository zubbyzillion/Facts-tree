
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ywrkgrgyvxhhejztanpt.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)