'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  ssr: false,
});

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  instructor: string;
  image: string;
  modules: Module[];
}

interface Module {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  resources: string[];
}

const manicureCourses: Course[] = [
  {
    id: '1',
    title: 'Manicura Básica',
    description: 'Aprende las técnicas fundamentales de manicura, desde el cuidado de cutículas hasta la aplicación de esmalte.',
    duration: '4 semanas',
    level: 'Principiante',
    price: '$99',
    instructor: 'María González',
    image: '/images/manicure-basic.jpg',
    modules: [
      {
        id: '1-1',
        title: 'Introducción a la Manicura',
        description: 'Conoce los conceptos básicos y herramientas necesarias para comenzar.',
        videoUrl: 'https://example.com/videos/manicure-intro.mp4',
        duration: '30 minutos',
        resources: [
          'Lista de herramientas esenciales',
          'Guía de seguridad e higiene',
          'Técnicas básicas de manicura'
        ]
      },
      {
        id: '1-2',
        title: 'Cuidado de Cutículas',
        description: 'Aprende a cuidar y tratar las cutículas de manera profesional.',
        videoUrl: 'https://example.com/videos/cuticle-care.mp4',
        duration: '45 minutos',
        resources: [
          'Técnicas de empuje de cutículas',
          'Tratamientos para cutículas',
          'Prevención de problemas comunes'
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Manicura Avanzada',
    description: 'Domina técnicas avanzadas de manicura, incluyendo nail art y diseños complejos.',
    duration: '6 semanas',
    level: 'Avanzado',
    price: '$149',
    instructor: 'Ana Martínez',
    image: '/images/manicure-advanced.jpg',
    modules: [
      {
        id: '2-1',
        title: 'Técnicas Avanzadas de Diseño',
        description: 'Aprende a crear diseños complejos y técnicas especiales.',
        videoUrl: 'https://example.com/videos/advanced-design.mp4',
        duration: '60 minutos',
        resources: [
          'Guía de técnicas avanzadas',
          'Catálogo de diseños',
          'Trucos profesionales'
        ]
      },
      {
        id: '2-2',
        title: 'Nail Art Profesional',
        description: 'Domina el arte de la decoración de uñas con técnicas profesionales.',
        videoUrl: 'https://example.com/videos/nail-art.mp4',
        duration: '90 minutos',
        resources: [
          'Técnicas de nail art',
          'Uso de herramientas especializadas',
          'Tendencias actuales'
        ]
      }
    ]
  }
];

export default function ManicureCourses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cursos de Manicura</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Aprende las técnicas más avanzadas de manicura y nail art con nuestros cursos especializados
            </p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manicureCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{course.duration}</span>
                  <span className="text-sm font-medium text-pink-600">{course.level}</span>
                </div>
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedCourse.title}</h2>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                  <p className="text-gray-600 mb-4">{selectedCourse.description}</p>
                  <div className="space-y-2">
                    <p><span className="font-medium">Instructor:</span> {selectedCourse.instructor}</p>
                    <p><span className="font-medium">Duración:</span> {selectedCourse.duration}</p>
                    <p><span className="font-medium">Nivel:</span> {selectedCourse.level}</p>
                    <p><span className="font-medium">Precio:</span> {selectedCourse.price}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Módulos</h3>
                  <div className="space-y-4">
                    {selectedCourse.modules.map((module) => (
                      <div
                        key={module.id}
                        className="border rounded-lg p-4 hover:border-pink-500 cursor-pointer transition-colors"
                        onClick={() => setSelectedModule(module)}
                      >
                        <h4 className="font-medium mb-2">{module.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{module.description}</p>
                        <span className="text-sm text-pink-600">{module.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Module Modal */}
      {selectedModule && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedModule.title}</h2>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                  <p className="text-gray-600">{selectedModule.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Video Tutorial</h3>
                  <VideoPlayer
                    url={selectedModule.videoUrl}
                    title={selectedModule.title}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Recursos Adicionales</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedModule.resources.map((resource, index) => (
                      <li key={index} className="text-gray-600">{resource}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 