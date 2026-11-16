import { createClient } from "@supabase/supabase-js";

// Conexão com o Supabase (banco Postgres na nuvem).
// O endereço e a chave "anon" vêm das variáveis de ambiente
// VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY (arquivo .env.local no
// computador, ou Settings → Environment Variables na Vercel).
// A chave "anon" é pública por design — a segurança vem do login (Auth)
// e das regras de Row Level Security definidas em supabase/schema.sql,
// que garantem que cada usuário só acessa as próprias linhas.

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "Supabase não configurado: defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY.",
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
