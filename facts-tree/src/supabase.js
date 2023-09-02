
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ywrkgrgyvxhhejztanpt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3cmtncmd5dnhoaGVqenRhbnB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY3MTkwMzAsImV4cCI6MjAwMjI5NTAzMH0.Vlj8SXhL2_KbF9VsypPX44w8fsKra5GCgIAz3C6qX2o'
const supabase = createClient(supabaseUrl, supabaseKey)