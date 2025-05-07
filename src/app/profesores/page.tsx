'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Teacher {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  experience: string;
  bio: string;
  image: string;
  courses: {
    id: string;
    title: string;
    category: string;
  }[];
}

export default function Teachers() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const teachers: Teacher[] = [
    {
      id: '1',
      name: 'María González',
      role: 'Instructora Principal',
      specialties: ['Manicura', 'Nail Art', 'Diseño de Uñas'],
      experience: '10+ años',
      bio: 'Especialista en técnicas avanzadas de manicura y diseño de uñas. Certificada en las últimas tendencias de nail art y técnicas de esculpido.',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&auto=format&fit=crop&q=60',
      courses: [
        { id: '1', title: 'Manicura Básica', category: 'Uñas' },
        { id: '2', title: 'Nail Art Avanzado', category: 'Uñas' }
      ]
    },
    {
      id: '2',
      name: 'Carlos Rodríguez',
      role: 'Instructor de Peluquería',
      specialties: ['Cortes Modernos', 'Coloración', 'Técnicas de Estilizado'],
      experience: '15+ años',
      bio: 'Experto en técnicas de corte y coloración. Especializado en tendencias actuales y técnicas de estilizado profesional.',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&auto=format&fit=crop&q=60',
      courses: [
        { id: '3', title: 'Peluquería Avanzada', category: 'Peluquería' },
        { id: '4', title: 'Técnicas de Coloración', category: 'Peluquería' }
      ]
    },
    {
      id: '3',
      name: 'Ana Martínez',
      role: 'Instructora de Maquillaje',
      specialties: ['Maquillaje Profesional', 'Maquillaje de Novias', 'Caracterización'],
      experience: '8+ años',
      bio: 'Especialista en maquillaje profesional y técnicas de caracterización. Experta en maquillaje para eventos especiales.',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&auto=format&fit=crop&q=60',
      courses: [
        { id: '5', title: 'Maquillaje Profesional', category: 'Maquillaje' },
        { id: '6', title: 'Maquillaje de Novias', category: 'Maquillaje' }
      ]
    },
    {
      id: '4',
      name: 'Laura Sánchez',
      role: 'Instructora de Estética',
      specialties: ['Tratamientos Faciales', 'Masajes', 'Dermatología Estética'],
      experience: '12+ años',
      bio: 'Experta en tratamientos faciales y técnicas de masaje. Especializada en dermatología estética y cuidado de la piel.',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&auto=format&fit=crop&q=60',
      courses: [
        { id: '7', title: 'Cuidado Facial Profesional', category: 'Estética' },
        { id: '8', title: 'Masajes Relajantes', category: 'Estética' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Profesores</h1>
            <p className="text-xl md:text-2xl">
              Conoce a nuestro equipo de instructores profesionales
            </p>
          </div>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedTeacher(teacher)}
            >
              <div className="relative h-64">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{teacher.name}</h3>
                <p className="text-pink-600 font-medium mb-2">{teacher.role}</p>
                <p className="text-gray-600 mb-4">{teacher.experience} de experiencia</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {teacher.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <button
                  className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTeacher(teacher);
                  }}
                >
                  Ver Perfil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedTeacher.name}</h2>
                <button
                  onClick={() => setSelectedTeacher(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={selectedTeacher.image}
                    alt={selectedTeacher.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Rol</h3>
                    <p className="text-gray-600">{selectedTeacher.role}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Experiencia</h3>
                    <p className="text-gray-600">{selectedTeacher.experience}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Especialidades</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTeacher.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Biografía</h3>
                    <p className="text-gray-600">{selectedTeacher.bio}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cursos</h3>
                    <div className="space-y-2">
                      {selectedTeacher.courses.map((course) => (
                        <div
                          key={course.id}
                          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="font-medium">{course.title}</span>
                          <span className="text-sm text-gray-500">{course.category}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 