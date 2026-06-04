import { MediaCardData, CampaignVisual, EditorialPublication } from '../models/models';

export const VIDEOS_PROMO: MediaCardData[] = [
  {
    id: 'promo-001',
    type: 'video',
    title: 'Brut(es)',
    orientation: 'portrait',
    thumbnail: 'thumbnails/brut_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712068',
    tags: ['Promotion', "Piano'cktail"],
  },
  {
    id: 'promo-002',
    type: 'video',
    title: 'La vie rêvée',
    orientation: 'portrait',
    thumbnail: 'thumbnails/la_vie_revee_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712067',
    tags: ['Promotion', "Piano'cktail"],
  },
  {
    id: 'promo-003',
    type: 'video',
    title: 'Lubiana',
    orientation: 'portrait',
    thumbnail: 'thumbnails/lubiana_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712069',
    tags: ['Promotion', "Piano'cktail"],
  },
];
export const VIDEOS_EQUIPE: MediaCardData[] = [
  {
    id: 'equipe-001',
    type: 'video',
    title:
      'On aurait pu vous dévoiler la programmation d’avril hier… mais on a préféré éviter toute confusion',
    orientation: 'portrait',
    thumbnail: 'thumbnails/avril_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712474',
    tags: ["Vie d'équipe", "Piano'cktail"],
  },
  {
    id: 'equipe-002',
    type: 'video',
    title:
      'Vous ! Bien sûr 😇 Le spectacle est presque complet donc nous savons que vous serez au rendez-vous',
    orientation: 'portrait',
    thumbnail: 'thumbnails/devinez_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712475',
    tags: ["Vie d'équipe", "Piano'cktail"],
  },
  {
    id: 'equipe-003',
    type: 'video',
    title:
      'Un bonbon ou une place de spectacle ! 🎃 L’ambiance n’est pas si calme que ça pendant les vacances',
    orientation: 'portrait',
    thumbnail: 'thumbnails/fantome_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712476',
    tags: ["Vie d'équipe", "Piano'cktail"],
  },
  {
    id: 'equipe-004',
    type: 'video',
    title: 'Livraison de danseurs chauds bouillants !',
    orientation: 'portrait',
    thumbnail: 'thumbnails/mug_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712477',
    tags: ["Vie d'équipe", "Piano'cktail"],
  },
];

export const COUV_BTS: CampaignVisual[] = [
  {
    cover: 'photo_plaquette1.jpg',
    backstage: 'jade_makeup.jpg',
    title: "Couverture Plaquette Piano'cktail 2026-2027",
  },
  {
    cover: 'photo_plaquette2.jpg',
    backstage: 'jade_coiffure.jpg',
    title: 'Couverture alternative',
  },
];

export const DOC_PLAQUETTE: MediaCardData[] = [
  {
    id: 'plaquette-001',
    type: 'pdf',
    title: "Plaquette Piano'cktail 2025-26",
    orientation: 'landscape',
    thumbnail: 'plaquette_25_thumbnail.jpg',
    calameoUrl: 'https://www.calameo.com/read/007956311a7ecd2fbe4af',
    tags: ['presse'],
  },
];

export const PLAQUETTES: EditorialPublication[] = [
  {
    title: "Plaquette Piano'cktail 2025-2026",
    year: '2025',

    calameoUrl: 'https://www.calameo.com/read/007956311a7ecd2fbe4af',

    description:
      // "Conception de la campagne visuelle, coiffure et maquillage du shooting photo, accompagnement artistique et valorisation de l'identité de saison.",
      "Texte expliquant ce j'ai fait dessus où synthétisant la démarche",

    reverse: false,
  },
];
