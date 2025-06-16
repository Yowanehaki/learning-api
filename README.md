# Learning API Backend

A Node.js backend service for handling customer feedback with MySQL database using Prisma ORM.

## Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- npm or yarn

## Installation

1. Clone the repository and install dependencies:
```bash
git clone <repository-url>
cd learning-api/backend
npm install
```

2. Create a `.env` file in the root directory with the following content:
```env
DATABASE_URL="mysql://username:password@localhost:3306/your_database_name"
NODE_ENV="development"
```

3. Set up the database:
```bash
# Run database migrations
npx prisma migrate dev

# Seed the database with initial data
npm run seed
```

## Running the Application

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## Testing

Run the test suite:
```bash
npm test
```

## API Documentation

The API documentation is available through Swagger UI when the server is running:
- Visit `http://localhost:3000/api-docs` in your browser

## Available Endpoints

- `GET /api` - Welcome message and available endpoints
- `GET /api/test` - Test endpoint
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback/sessions/:sessionId` - Get feedback by session ID
- `GET /api/feedback/summary` - Get feedback summary

## Database Schema

The application uses the following main models:
- FeedbackCategory
- FeedbackDesc
- FeedbackForm

For detailed schema information, check `prisma/schema.prisma`
