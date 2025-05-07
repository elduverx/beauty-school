import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Obtener todos los usuarios
  const users = await prisma.user.findMany();
  console.log('\nUsuarios:', users);

  // Obtener todos los cursos
  const courses = await prisma.course.findMany({
    include: {
      instructor: true,
      lessons: true,
      enrollments: true,
    },
  });
  console.log('\nCursos:', courses);

  // Obtener todas las inscripciones
  const enrollments = await prisma.enrollment.findMany({
    include: {
      user: true,
      course: true,
    },
  });
  console.log('\nInscripciones:', enrollments);

  // Obtener todas las lecciones
  const lessons = await prisma.lesson.findMany({
    include: {
      course: true,
    },
  });
  console.log('\nLecciones:', lessons);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 