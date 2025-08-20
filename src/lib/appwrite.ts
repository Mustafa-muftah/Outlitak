import { Client, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT )
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// Initialize Appwrite services
export const databases = new Databases(client);

// Database and Collection IDs
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const CONTACTS_COLLECTION_ID = import.meta.env.VITE_APPWRITE_CONTACTS_COLLECTION_ID ;

// Export client for other uses
export { client };