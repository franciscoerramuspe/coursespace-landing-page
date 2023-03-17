import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Estudia desde cualquier sitio',
    description:
      'No importa si estás en casa, en el trabajo o de viaje. ¡Siempre tendrás acceso a tus cursos para estudiar desde cualquier sitio!',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Costo muy accesible',
    description: 'Proveemos un costo muy accesible para que puedas mejorar tus habilidades sin afectar tu presupuesto',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Tiempo de estudio flexible',
    description: 'Maneja tu propio itinerario de estudio, y adapta le ensaeñanza a tu día a día',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Consultas con nuestros profesores',
    description: 'Resuelve tus dudas preguntándole a cualquiera de nuestros profesores',
    icon: <ContactSupportIcon />,
  },
]
