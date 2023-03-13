import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/streamlit-427x427.png',
    title: 'Python con dashboards de Streamlit',
    rating: 5,
    ratingCount: 114,
    price: 24.99,
    category: 'Beginner',
  },
  {
    id: 2,
    cover: '/images/courses/google_earth.png',
    title: 'Google Earth Engine',
    rating: 5,
    ratingCount: 2,
    price: 24.99,
    category: 'Intermediate',
  },
  {
    id: 3,
    cover: '/images/courses/manim.png',
    title: 'Animacion con Manim en Python',
    rating: 4.3,
    ratingCount: 5,
    price: 24.99,
    category: 'Intermediate',
  },
  {
    id: 4,
    cover: '/images/courses/datastructures_algo.jpg',
    title: 'Estructuras de datos y algoritmos en Python',
    rating: 5,
    ratingCount: 120,
    price: 24.99,
    category: 'Intermediate',
  },
]
