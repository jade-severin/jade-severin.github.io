import { WebsiteProject } from '../../shared/website-showcase/website-showcase.component';
import { MediaCardData, CampaignVisual, EditorialPublication } from '../models/models';

export const VIDEOS_PROMO: MediaCardData[] = [
  {
    id: 'promo-001',
    type: 'video',
    title: 'Brut(es)',
    orientation: 'portrait',
    thumbnail: 'thumbnails/brut_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712068',
    tags: ['Promotion', 'Danse', "Piano'cktail"],
  },
  {
    id: 'promo-002',
    type: 'video',
    title: 'La vie rêvée',
    orientation: 'portrait',
    thumbnail: 'thumbnails/la_vie_revee_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712067',
    tags: ['Promotion', 'Théâtre', "Piano'cktail"],
  },
  {
    id: 'promo-003',
    type: 'video',
    title: 'Lubiana',
    orientation: 'portrait',
    thumbnail: 'thumbnails/lubiana_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712069',
    tags: ['Promotion', 'Concert', "Piano'cktail"],
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
    tags: ['Annonce', "Piano'cktail"],
  },
  {
    id: 'equipe-002',
    type: 'video',
    title:
      'Vous ! Bien sûr 😇 Le spectacle est presque complet donc nous savons que vous serez au rendez-vous',
    orientation: 'portrait',
    thumbnail: 'thumbnails/devinez_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712475',
    tags: ['Teasing', "Piano'cktail"],
  },
  {
    id: 'equipe-003',
    type: 'video',
    title:
      'Un bonbon ou une place de spectacle ! 🎃 L’ambiance n’est pas si calme que ça pendant les vacances',
    orientation: 'portrait',
    thumbnail: 'thumbnails/fantome_thumbnail.jpg',
    vimeoUrl: 'https://player.vimeo.com/video/1197712476',
    tags: ["Vie d'équipe", "Piano'cktail", 'Détournement'],
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
    title: "Plaquette Piano'cktail 2026-2027",
    year: '2026',

    calameoUrl: '//v.calameo.com/?bkcode=0000002690157cddcf0b6&mode=mini',

    description: '',

    reverse: true,
  },
  {
    title: "Plaquette Piano'cktail 2025-2026",
    year: '2025',

    calameoUrl: '//v.calameo.com/?bkcode=007956311a7ecd2fbe4af&mode=mini',

    description: '',

    reverse: false,
  },
];

export const WEBSITES: WebsiteProject[] = [
  {
    title: "Le Carré d'Argent",
    client: 'Mairie de Pontchâteau',

    description: 'Refonte éditoriale du site web.',

    url: 'https://www.carredargent.fr/',

    desktopImage: 'carreargent_desktop.jpg',

    tabletImage: 'carreargent_tablet.jpg',

    mobileImage: 'carreargent_mobile.jpg',

    missions: [
      'Harmonisation éditoriale',
      'Structuration des contenus',
      'Optimisation des parcours utilisateurs',
      "Amélioration de l'expérience de navigation",
    ],

    challenge: {
      question: "Comment simplifier l'accès à l'information culturelle ?",
      answer:
        "J'ai participé à l'optimisation du site internet du Carré d'Argent en harmonisant les contenus éditoriaux et en repensant les parcours de navigation. L'objectif était de permettre aux visiteurs de trouver rapidement les informations essentielles grâce à une architecture plus claire et une navigation pensée selon le principe des trois clics.",
    },
  },
  {
    title: 'La Passerelle',
    client: 'Mairie de Cordemais',

    description: 'Gestion du site de billetterie.',

    url: 'https://billetterie-lapasserelle-cordemais.mapado.com/',

    desktopImage: 'passerelle_desktop.jpg',

    tabletImage: 'passerelle_tablet.jpg',

    mobileImage: 'passerelle_mobile.jpg',

    missions: [
      'Intégration de la programmation',
      'Gestion des abonnements',
      'Optimisation des parcours de réservation',
      "Valorisation de l'offre culturelle",
    ],

    challenge: {
      question:
        "Comment personnaliser un outil standardisé pour refléter l'identité d'un lieu culturel ?",
      answer:
        "J'ai assuré la mise en ligne de la programmation et des offres d'abonnement sur la plateforme de billetterie Mapado, en adaptant l'interface aux besoins des publics et à l'identité de la salle. Au-delà de l'administration technique, ce travail consistait à valoriser les spectacles, faciliter l'acte d'achat et créer une expérience cohérente avec l'image de la Passerelle.",
    },
  },
];
