export interface EditorialPublication {
  title: string;

  year: string;

  calameoUrl: string;

  description: string;

  reverse?: boolean;
}

export type MediaType = 'video' | 'image' | 'pdf';

export interface MediaCardData {
  id: string;

  title: string;

  description?: string;

  category?: string;

  type: MediaType;

  orientation: 'portrait' | 'landscape';

  thumbnail: string;

  url?: string;

  vimeoUrl?: string;

  calameoUrl?: string;

  tags?: string[];
}

export interface CampaignVisual {
  cover: string;
  backstage: string;
  title: string;
}
