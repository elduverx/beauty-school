'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  videoUrl: string;
}

export default function Courses() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const courses: Course[] = [
    {
      id: '1',
      title: 'Maquillaje Profesional',
      description: 'Aprende técnicas avanzadas de maquillaje para diferentes ocasiones y tipos de piel.',
      category: 'Maquillaje',
      price: '$299',
      rating: 4.9,
      reviews: 120,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=60',
      videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761'
    },
    {
      id: '2',
      title: 'Peluquería Avanzada',
      description: 'Domina las técnicas más modernas de corte, coloración y estilizado.',
      category: 'Peluquería',
      price: '$399',
      rating: 4.8,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=60',
      videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761'
    },
    {
      id: '3',
      title: 'Diseño de Uñas',
      description: 'Especialízate en manicure, pedicure y diseño de uñas artísticas.',
      category: 'Uñas',
      price: '$249',
      rating: 4.7,
      reviews: 85,
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&auto=format&fit=crop&q=60',
      videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761'
    },
    {
      id: '4',
      title: 'Cuidado Facial Profesional',
      description: 'Aprende técnicas avanzadas de limpieza facial y tratamientos estéticos.',
      category: 'Estética',
      price: '$349',
      rating: 4.9,
      reviews: 110,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=60',
      videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761'
    },
    {
      id: '5',
      title: 'Masajes Relajantes',
      description: 'Domina diferentes técnicas de masaje para el bienestar y la relajación.',
      category: 'Estética',
      price: '$299',
      rating: 4.8,
      reviews: 75,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop&q=60',
      videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761'
    },
    {
      id: '6',
      title: 'Diseño de Cejas',
      description: 'Aprende técnicas de diseño y perfilado de cejas para diferentes tipos de rostro.',
      category: 'Estética',
      price: '$199',
      rating: 4.7,
      reviews: 65,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=60',
      videoUrl: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'maquillaje', name: 'Maquillaje' },
    { id: 'peluqueria', name: 'Peluquería' },
    { id: 'unas', name: 'Uñas' },
    { id: 'estetica', name: 'Estética' }
  ];

  const filteredCourses = selectedCategory === 'todos' 
    ? courses 
    : courses.filter(course => course.category.toLowerCase() === selectedCategory);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Cursos
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Explora nuestra selección de cursos profesionales de belleza
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="relative pb-48">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => router.push(`/cursos/${course.id}`)}
                    className="bg-white text-pink-600 px-4 py-2 rounded-lg font-medium hover:bg-pink-50 transition-colors"
                  >
                    Ver Curso
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <span className="px-2 py-1 text-xs font-semibold text-pink-600 bg-pink-100 rounded-full">
                    {course.category}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">{course.rating} ★ ({course.reviews})</span>
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">{course.title}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {course.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-pink-600 font-medium">{course.price}</span>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-md hover:bg-pink-700"
                    onClick={() => router.push(`/cursos/${course.id}`)}
                  >
                    Ver Curso
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 