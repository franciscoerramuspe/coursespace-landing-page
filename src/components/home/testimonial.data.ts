import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Detailed learning materials',
    content:
      'Classes that provide very detailed material in term of making UI UX Design starting team making low and hight quality, system designs, using data layout and make prototypes and testing.',
    user: {
      id: 1,
      name: 'Luis Sera',
      professional: 'UI/UX Engineer',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Best Quality Online Course!',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user: {
      id: 1,
      name: 'Riski',
      professional: 'Software Engineer',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Explicaciones claras',
    content: 'Excelente curso. Lo voy comprendiendo a la perferccién. Muy recomendable.',
    user: {
      id: 1,
      name: 'Valeria Daiana Garcia',
      professional: 'FullStack Designer',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: '¡Grandes instructores!',
    content: 'Excelente curso! Muy completo y bien estructurado. Lo recomiendo.',
    user: {
      id: 1,
      name: 'Antonela Torresi',
      professional: 'SEO Expert',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Explicaciones claras y amigables',
    content:
      'Hasta el momento, la eleccién es super adecuada. Los audios son muy claros, y en ellos se nota el expersite de los profesores.',
    user: {
      id: 1,
      name: 'Ashley Graham',
      professional: 'Back-End Developer',
      photo: '5.jpg',
    },
  },
]
