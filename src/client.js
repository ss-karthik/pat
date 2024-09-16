import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hirnoyrtefcgckkcmwxx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhpcm5veXJ0ZWZjZ2Nra2Ntd3h4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0ODM2MDQsImV4cCI6MjA0MjA1OTYwNH0.blIq0CpSPLLTLn_qnW5zxJHoeQZC-ZYjpFjXgtyKm38';
export const supabase = createClient(supabaseUrl, supabaseKey)
