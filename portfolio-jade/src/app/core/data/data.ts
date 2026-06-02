import { MediaCardData } from '../../shared/media-card/media-card.component';

export const MEDIA_ITEMS: MediaCardData[] = [
  {
    id: 'video-001',
    type: 'video',
    title: 'Brut(es)',
    orientation: 'portrait',
    thumbnail: 'thumbnails/brut_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712068',
    tags: ['Promotion', "Piano'cktail"],
  },
  {
    id: 'video-002',
    type: 'video',
    title: 'La vie rêvée',
    orientation: 'portrait',
    thumbnail: 'thumbnails/la_vie_revee_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712067',
    tags: ['Promotion', "Piano'cktail"],
  },
  {
    id: 'video-003',
    type: 'video',
    title: 'Lubiana',
    orientation: 'portrait',
    thumbnail: 'thumbnails/lubiana_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712069',
    tags: ['Promotion', "Piano'cktail"],
  },
  {
    id: 'plaquette-001',
    type: 'pdf',
    title: 'Plaquette Pianocktail 2025-26',
    orientation: 'landscape',
    thumbnail: 'plaquette_25_thumbnail.jpg',
    calameoUrl: 'https://www.calameo.com/read/007956311a7ecd2fbe4af',
    tags: ['presse'],
  },
];
