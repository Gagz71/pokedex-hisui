import { createClient } from '@supabase/supabase-js'

// Client Supabase unique de l'appli. La session de connexion est gardée dans
// le localStorage de l'appareil (elle survit à la fermeture de l'appli).
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
)
