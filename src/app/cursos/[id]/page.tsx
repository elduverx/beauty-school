'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
  ssr: false,
});

interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoUrl: string;
  resources: string[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  instructor: string;
  duration: string;
  level: string;
  modules: Module[];
  videoUrl: string;
  whatYouWillLearn: string[];
  requirements: string[];
}

export default function CourseDetails() {
  const params = useParams();
  const router = useRouter();
  const [course, setCourse] = useState<Course | null>(null);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulando la carga de datos del curso
    const fetchCourseData = async () => {
      setIsLoading(true);
      // Aquí iría la llamada a la API
      const courseData: Course = {
        id: params.id as string,
        title: 'Manicura Profesional',
        description: 'Aprende las técnicas más avanzadas de manicura y pedicura. Desde el cuidado básico hasta diseños artísticos, este curso te preparará para convertirte en un profesional de la belleza de uñas.',
        category: 'Uñas',
        price: '$299',
        rating: 4.8,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&auto=format&fit=crop&q=60',
        instructor: 'María González',
        duration: '8 semanas',
        level: 'Intermedio',
        videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        whatYouWillLearn: [
          'Técnicas avanzadas de manicura y pedicura',
          'Diseño de uñas artísticas',
          'Uso de herramientas profesionales',
          'Técnicas de esculpido y decoración',
          'Gestión de clientes y consultorio'
        ],
        requirements: [
          'No se requiere experiencia previa',
          'Kit básico de manicura (incluido en el curso)',
          'Computadora con conexión a internet',
          'Dedicación de 4-6 horas semanales'
        ],
        modules: [
          {
            id: '1',
            title: 'Introducción a la Manicura',
            description: 'Fundamentos básicos y preparación del área de trabajo.',
            duration: '2 horas',
            videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            resources: ['Guía de herramientas', 'Lista de materiales', 'Protocolo de higiene']
          },
          {
            id: '2',
            title: 'Técnicas de Corte y Forma',
            description: 'Aprende a dar forma a las uñas de manera profesional.',
            duration: '3 horas',
            videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            resources: ['Guía de formas de uñas', 'Técnicas de corte', 'Ejercicios prácticos']
          },
          {
            id: '3',
            title: 'Diseño de Uñas Artísticas',
            description: 'Técnicas avanzadas de decoración y diseño.',
            duration: '4 horas',
            videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            resources: ['Catálogo de diseños', 'Técnicas de pintura', 'Uso de accesorios']
          }
        ]
      };
      setCourse(courseData);
      setIsLoading(false);
    };

    fetchCourseData();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Curso no encontrado</h2>
          <button
            onClick={() => router.push('/cursos')}
            className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
          >
            Volver a Cursos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                  {course.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg md:text-xl mb-6">{course.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span>{course.rating} ({course.reviews} reseñas)</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {course.instructor}
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Preview */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <VideoPlayer 
                  url={course.videoUrl} 
                  title={course.title}
                />
              </div>
            </div>

            {/* Course Modules */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Contenido del Curso</h2>
              <div className="space-y-4">
                {course.modules.map((module) => (
                  <div
                    key={module.id}
                    className="border rounded-lg p-4 hover:border-pink-500 cursor-pointer transition-colors"
                    onClick={() => setSelectedModule(module)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{module.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{module.description}</p>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {module.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Lo que aprenderás</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-pink-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Requisitos</h2>
              <ul className="space-y-3">
                {course.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-pink-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Course Info & Enrollment */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-pink-600">{course.price}</span>
                <span className="text-gray-500"> / curso completo</span>
              </div>
              <button
                onClick={() => alert('Funcionalidad de inscripción en desarrollo')}
                className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors mb-4"
              >
                Inscribirse Ahora
              </button>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Duración: {course.duration}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Nivel: {course.level}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Instructor: {course.instructor}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <VideoPlayer 
                  url={selectedModule.videoUrl} 
                  title={selectedModule.title}
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Descripción</h3>
                  <p className="text-gray-600">{selectedModule.description}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Recursos</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedModule.resources.map((resource, index) => (
                      <li key={index}>{resource}</li>
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