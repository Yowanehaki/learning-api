const request = require('supertest');
const app = require('../src/app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Feedback API', () => {
    beforeEach(async () => {
        await prisma.$executeRaw`TRUNCATE TABLE FeedbackForm`;
    });

    it('should submit feedback successfully', async () => {
        const response = await request(app)
            .post('/api/feedback')
            .send({
                ratings: {
                    salesPenguasaanProduk: 5,
                    salesPenampilan: 4
                },
                suggestions: "Great service!"
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('sessionId');
    });

    it('should get feedback by session ID', async () => {
        // First submit feedback
        const submitResponse = await request(app)
            .post('/api/feedback')
            .send({
                ratings: { salesPenguasaanProduk: 5 },
                suggestions: "Test"
            });

        const { sessionId } = submitResponse.body;

        // Then get it back
        const getResponse = await request(app)
            .get(`/api/feedback/sessions/${sessionId}`);

        expect(getResponse.status).toBe(200);
        expect(Array.isArray(getResponse.body)).toBe(true);
    });
});
