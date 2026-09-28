-- Table de synchronisation de la progression (voir src/stores/sync.ts).
-- À exécuter une fois dans Supabase : SQL Editor > New query > coller > Run.
--
-- Une ligne par compte : toute la progression (Pokémon, Barons, équipe) est
-- stockée dans la colonne data, au même format que sur l'appareil.

create table if not exists public.progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Sécurité (RLS) : chaque compte ne peut lire et écrire QUE sa propre ligne.
-- C'est ce qui permet de laisser la clé publique dans le code de l'appli.
alter table public.progress enable row level security;

create policy "Lire sa progression" on public.progress
  for select to authenticated
  using ((select auth.uid()) = user_id);

create policy "Créer sa progression" on public.progress
  for insert to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Modifier sa progression" on public.progress
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Supprimer sa progression" on public.progress
  for delete to authenticated
  using ((select auth.uid()) = user_id);

grant select, insert, update, delete on public.progress to authenticated;
