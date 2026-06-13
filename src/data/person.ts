export type Interest = {
  icon: string;
  label: string;
  size: 'small' | 'medium' | 'large';
};

export type QuickFact = {
  icon: string;
  text: string;
};

export type GalleryCard = {
  image: string;
  caption: string;
};

export const interests = [
  { icon: '🧘', label: 'Wellness', size: 'large' },
  { icon: '🐾', label: 'Animals', size: 'medium' },
  { icon: '✈️', label: 'Travel', size: 'large' },
  { icon: '🎵', label: 'Music', size: 'medium' },
  { icon: '🏋️', label: 'Fitness', size: 'large' },
  { icon: '📚', label: 'Reading', size: 'small' },
  { icon: '🌿', label: 'Nature', size: 'small' },
  { icon: '🎙️', label: 'Podcasts', size: 'small' },
  { icon: '🌊', label: 'Sea', size: 'medium' },
];

export const quickFacts = [
  { icon: '✈️', text: '25 countries explored' },
  { icon: '☕', text: 'Coffee: ~3 cups/day' },
  { icon: '🔥', text: '__DUOLINGO_STREAK__' },
  { icon: '🌍', text: '4 continents reached' },
  { icon: '🐈', text: 'Cat mom' },
  { icon: '🧲', text: 'Mugs & magnets collector' },
];

export const galleryCards = [
  {
    image: import.meta.env.BASE_URL + 'meditating.webp',
    caption: 'Can keep inner peace while debugging legacy code',
  },
  {
    image: import.meta.env.BASE_URL + 'coder-cat.webp',
    caption: 'Capable of mentoring just about anyone',
  },
  {
    image: import.meta.env.BASE_URL + 'planting-trees.webp',
    caption: 'Can nurture projects from seed to launch',
  },
  {
    image: import.meta.env.BASE_URL + 'sea-view-coding.webp',
    caption: 'Remote work pro, able to work from anywhere',
  },
  {
    image: import.meta.env.BASE_URL + 'shooting-range.webp',
    caption: 'Can hit project goals as precisely as bullseyes',
  },
  {
    image: import.meta.env.BASE_URL + 'route-66.webp',
    caption: "Not afraid to take the long way when it's worth it",
  },
  {
    image: import.meta.env.BASE_URL + 'camels.webp',
    caption: 'Can find my way through any codebase or desert',
  },
];

