export type EducationLink = {
  href: string;
  label: string;
};

export type EducationItem = {
  id: string;
  date: string;
  degree: string;
  school: string;
  location: string;
  paragraphs: string[];
  bullets?: string[];
  links?: EducationLink[];
  activities?: string[];
};

export const education: EducationItem[] = [
  {
    id: 'msc-aau',
    date: '09/2017 - 06/2019',
    degree:
      'Master of Science in Vision, Graphics and Interactive Systems Engineering',
    school: 'Aalborg Universitet',
    location: 'Aalborg, Denmark',
    paragraphs: [
      'My education at AAU combined strong theoretical foundations with hands-on project work, following the university’s Problem-Based Learning model. My studies focused on the fields of:',
      'For my master’s thesis, I developed a system that recognizes human emotions from images by applying deep learning techniques, training CNNs to classify emotions based on facial expressions and body movements.',
    ],
    bullets: ['Computer Vision', 'Computer Graphics', 'Interactive Systems'],
    links: [
      {
        href: 'https://projekter.aau.dk/deep-emotion-recognition-through-upper-body-movements-and-facial-expression-23cbd898.html',
        label: 'Thesis',
      },
      {
        href: 'https://vbn.aau.dk/da/publications/deep-emotion-recognition-through-upper-body-movements-and-facial-',
        label: 'Publication',
      },
    ],
    activities: [
      'Young Professionals in Denmark (Copenhagen Capacity) — represented AAU in career development events and promoted Denmark as a study/work destination (Oct 2017 – Jun 2018).',
    ],
  },
  {
    id: 'erasmus',
    date: '09/2018 - 02/2019',
    degree: 'Erasmus+ Programme',
    school: 'Politecnico di Milano',
    location: 'Milan, Italy',
    paragraphs: [
      'Spending a semester abroad at a prestigious university as is Politecnico di Milano broadened my horizons and allowed me to learn extensively from an international environment. This experience provided me with new perspectives and insights into diverse cultures. Additionally, it enabled me to expand my knowledge of innovative technologies and improve my skills in working within international teams.',
    ],
  },
  {
    id: 'bsc-isel',
    date: '09/2013 - 09/2016',
    degree:
      'Bachelor of Science in Computer Science and Multimedia Engineering',
    school: 'Instituto Superior de Engenharia de Lisboa',
    location: 'Lisbon, Portugal',
    paragraphs: ['During my degree, I focused on key areas such as:'],
    bullets: [
      'Computer Systems',
      'Interactive Multimedia Environments',
      'Computer Networks',
      'Multimedia Processing Systems',
      'Computational Intelligence',
    ],
  },
];

