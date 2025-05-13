export interface Player {
  id: string;
  updated_at: Date;
  created_at: Date;
  cedula_passport: string;
  ghin: string;
  handicap: string;
  playing_handicap?: string;
  diestro?: string;
  patrocinador: string;
  name: string;
  image: string;
  team: string;
  foursome: string;
  other_pair_document: string;
  description: string;
  favorite: number;
}
