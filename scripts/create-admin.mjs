import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

// Función para hashear la contraseña
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

async function main() {
  try {
    // Datos del administrador por defecto
    const adminData = {
      name: 'Admin',
      email: 'admin@beautyschool.com',
      password: hashPassword('admin123'), // Contraseña por defecto
      role: 'ADMIN'
    };

    // Verificar si el admin ya existe
    const existingAdmin = await prisma.user.findUnique({
      where: {
        email: adminData.email
      }
    });

    if (existingAdmin) {
      console.log('El usuario administrador ya existe.');
      return;
    }

    // Crear el usuario administrador
    const admin = await prisma.user.create({
      data: adminData
    });

    console.log('Usuario administrador creado exitosamente:', admin);
  } catch (error) {
    console.error('Error al crear el usuario administrador:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 