import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg',
    title: 'Python con dashboards de Streamlit',
    rating: 5,
    ratingCount: 114,
    price: 24.99,
    category: 'Beginner',
    link: 'https://www.udemy.com/course/python-integral/?referralCode=9729C0ED8575EEAF088C',
  },
  {
    id: 2,
    cover: '/images/courses/google_earth.png',
    title: 'Google Earth Engine',
    rating: 5,
    ratingCount: 2,
    price: 24.99,
    category: 'Intermediate',
    link: 'https://www.udemy.com/course/google-earth-engine-integral/',
  },
  {
    id: 3,
    cover: '/images/courses/manim.png',
    title: 'Animacion con Manim en Python',
    rating: 4.3,
    ratingCount: 5,
    price: 24.99,
    category: 'Intermediate',
    link: 'https://www.udemy.com/course/python-manim/?referralCode=B5D27E4880A9E2E5D3F0',
  },
]
