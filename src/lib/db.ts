import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface DatabaseError extends Error {
  code?: string;
  meta?: Record<string, unknown>;
}

export async function connectDB() {
  try {
    await prisma.$connect();
    console.log('Database connected successfully');
  } catch (error) {
    const dbError = error as DatabaseError;
    console.error('Database connection error:', dbError);
    throw new Error('Failed to connect to database');
  }
}

export async function testConnection(): Promise<boolean> {
  try {
    await prisma.$connect();
    await prisma.$disconnect();
    return true;
  } catch (error) {
    console.error('Database connection test failed:', error);
    return false;
  }
}

export async function initializeDatabase() {
  try {
    // Add any database initialization logic here
    // For example, creating initial tables or seeding data
    await prisma.$connect();
    // Add your initialization logic here
    await prisma.$disconnect();
  } catch (error) {
    console.error('Database initialization failed:', error);
    throw error;
  }
}

export default prisma; 