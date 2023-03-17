import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/gustavo.png',
    name: 'Gustavo Gonzalez Bonorino 🇦🇷',
    category: 'Creador y co-profesor',
    description:
      'Licenciado en Geología (UBA). Máster y Doctorado en Ciencias de la Tierra (McMaster University, Canadá). Dediqué mi vida a la docencia e investigación. Retirado, mantengo la misma pasión con la esperanza de instrur a la generación del futuro.',
    company: {
      name: 'Grab',
      logo: '/images/companies/mcmaster.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/augusto.png',
    name: 'Augusto Gonzalez Bonorino 🇦🇷',
    category: 'Creador y co-profesor',
    description:
      'Candidato a Phd en Economía en Claremont Graduate University, California. Titulado en Economía y Ciencia de Datos. Me apasiona combinar mis estudios para desentrelazar conceptos complejos y explicarlos de maneraencilla.',
    company: {
      name: 'CGU',
      logo: '/images/companies/claremont.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/francisco.png',
    name: 'Francisco Erramuspe 🇺🇾',
    category: 'co-profesor',
    description:
      'Titulado en Ciencias de la Computación en Troy University, Alabama. Aporto contenido sobre programacion en YouTube e Instagram. Tengo un año de experiencia como desarrollador de software, trabajando en empresas de Estados Unidos y Uruguay.',
    company: {
      name: 'TroyU',
      logo: '/images/companies/trojans.png',
    },
  },
]
