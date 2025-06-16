const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

beforeAll(async () => {
  // Set test environment
  process.env.NODE_ENV = 'test';
});

afterAll(async () => {
  // Clean up database connections
  await prisma.$disconnect();
});
