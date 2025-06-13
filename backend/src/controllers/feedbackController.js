const {PrismaClient} = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');
const prisma = new PrismaClient();

exports.submitFeedback = async (req, res, next) => {
    try {
        const { ratings, suggestions } = req.body;
        console.log('Received ratings:', ratings);
        console.log('Received suggestions:', suggestions);

        const labels = Object.keys(ratings);
        console.log('Looking for labels:', labels);

        const descriptions = await prisma.feedbackDesc.findMany({
            where: {
                label: {
                    in: labels
                }
            },
            select: {
                id: true,
                label: true,
                categoryId: true
            }
        });

        console.log('Found descriptions:', descriptions);

        if (descriptions.length === 0) {
            return res.status(400).json({
                message: 'No valid feedback descriptions found',
                receivedLabels: labels
            });
        }

        // Generate one formId for all entries in this submission
        const sessionId = uuidv4();

        // Create all entries in a single transaction
        const result = await prisma.$transaction(async (prisma) => {
            const createdEntries = [];
            
            for (const desc of descriptions) {
                if (ratings[desc.label]) {
                    const entry = await prisma.feedbackForm.create({
                        data: {
                            formId: sessionId, // Use same sessionId for all entries
                            descriptionId: desc.id,
                            categoryId: desc.categoryId, // Connect to the correct category
                            value: ratings[desc.label],
                            suggestions: suggestions // tambahkan suggestions ke setiap entry
                        }
                    });
                    createdEntries.push(entry);
                }
            }
            
            return createdEntries;
        });

        res.status(201).json({
            message: 'Feedback submitted successfully',
            sessionId: sessionId,
            entriesCreated: result.length
        });
    } catch (error) {
        console.error('Detailed error:', error);
        next(error);
    }
}