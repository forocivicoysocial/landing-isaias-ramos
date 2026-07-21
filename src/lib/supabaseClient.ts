import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// El cliente solo se usa en el navegador (formulario de contacto) con la
// llave "anon" pública, protegida por Row Level Security en Supabase.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
