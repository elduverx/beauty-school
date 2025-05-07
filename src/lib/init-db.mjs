import { testConnection, initializeDatabase } from './db.mjs';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function init() {
  try {
    // Test database connection
    const isConnected = await testConnection();
    if (!isConnected) {
      console.error('Failed to connect to the database');
      process.exit(1);
    }

    // Initialize database tables
    await initializeDatabase();
    console.log('Database initialization completed successfully');
  } catch (error) {
    console.error('Error during database initialization:', error);
    process.exit(1);
  }
}

// Run initialization
init(); 