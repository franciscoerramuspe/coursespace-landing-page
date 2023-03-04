import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/christian-buehner-DItYlc26zVI-unsplash.jpg',
    name: 'Gustavo Gonzalez Bonorino',
    category: 'Creador y co-profesor',
    description:
      'Licenciado en Geología (UBA). Máster y Doctorado en Ciencias de la Tierra (McMaster University, Canadá). Dediqué mi vida a la docencia e investigación. Retirado, mantengo la misma pasión con la esperanza de instrur a la generación del futuro.',
    company: {
      name: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg',
    name: 'Augusto Gonzalez Bonorino',
    category: 'Creador y co-profesor',
    description:
      'Candidato a Phd en Economía en Claremont Graduate University, California. Titulado en Economía y Ciencia de Datos. Me apasiona combinar mis estudios para desentrelazar conceptos complejos y explicarlos de maneraencilla.',
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/noah-buscher-8A7fD6Y5VF8-unsplash.jpg',
    name: 'Francisco Erramuspe',
    category: 'co-profesor',
    description: 'Titulado en Ciencias de la Computación en Troy University, Alabama. ',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  {
    id: 4,
    photo: '/images/mentors/philip-martin-5aGUyCW_PJw-unsplash.jpg',
    name: 'Rizki Known',
    category: 'Fullstack Development',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    company: {
      name: 'Microsoft',
      logo: '/images/companies/microsoft.png',
    },
  },
]
