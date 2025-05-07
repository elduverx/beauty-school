'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  image: string;
}

export default function Home() {
  const featuredCourses: Course[] = [
    {
      id: '1',
      title: 'Maquillaje Profesional',
      description: 'Aprende técnicas avanzadas de maquillaje para diferentes ocasiones y tipos de piel.',
      category: 'Maquillaje',
      price: '$299',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: '2',
      title: 'Peluquería Avanzada',
      description: 'Domina las técnicas más modernas de corte, coloración y estilizado.',
      category: 'Peluquería',
      price: '$399',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: '3',
      title: 'Diseño de Uñas',
      description: 'Especialízate en manicure, pedicure y diseño de uñas artísticas.',
      category: 'Uñas',
      price: '$249',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&auto=format&fit=crop&q=60'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=60"
          alt="Beauty School Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Escuela de Belleza
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Aprende las técnicas más avanzadas de belleza y estética
          </p>
          <Link
            href="/cursos"
            className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            Ver Cursos
          </Link>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cursos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-600 font-semibold">
                      ${course.price}
                    </span>
                    <Link
                      href={`/cursos/${course.id}`}
                      className="text-pink-600 hover:text-pink-700 font-semibold"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
