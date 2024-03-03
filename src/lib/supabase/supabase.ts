import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';

const url = PUBLIC_SUPABASE_URL;
const anon_key = PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(url, anon_key);