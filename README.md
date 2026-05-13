# Precision Editorial

Precision Editorial is a currency conversion and market data interface built with Next.js. The project currently includes a landing-page hero with currency selection, live exchange-rate integration, authentication flows with Better Auth, and supporting API routes for currency metadata and flag resolution.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Better Auth
- MongoDB + Mongoose
- CurrencyAPI
- Rest Countries API

## Current Features

- Hero section with:
  - amount input
  - currency selectors
  - conversion action
  - flag rendering for selected currencies
- Auth screens:
  - register
  - sign in
- Better Auth integration with MongoDB
- Profile persistence linked to authenticated users
- Internal API routes acting as a BFF for external APIs

## Project Structure

```text
src/
  app/
    api/
      auth/
      countries/
      exchange/
      profiles/
    register/
    sign-in/
  components/
    ui/
  lib/
  models/
  services/
```

Responsibility split:

- `src/lib/*`: integration with external providers or shared server utilities
- `src/app/api/*`: Next.js route handlers / BFF layer
- `src/services/*`: frontend-facing functions that call internal API routes
- `src/components/*`: reusable UI components
- `src/models/*`: Mongoose models

## Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
CURRENCY_API_KEY=your_currencyapi_key
```

Notes:

- Do not commit real credentials to GitHub.
- If you change environment variables, restart the dev server.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Internal API Routes

Examples of currently available routes:

- `GET /api/exchange/latest?base=USD&currencies=EUR,BRL`
- `GET /api/exchange/currencies`
- `GET /api/countries/all`
- `GET /api/profiles/me`
- `POST /api/profiles/me`

These routes are used to:

- hide external provider details from the frontend
- normalize third-party responses
- keep API keys on the server

## Authentication

The project uses Better Auth with MongoDB as the auth storage layer.

Current auth flow:

- user signs up with email and password
- auth user is created by Better Auth
- application profile is created separately and linked by `authUserId`

## Notes

- The project is still in active development.
- UI, API contracts, and feature scope will continue to evolve.
- This README is intended as a starting point and can be refined as the codebase grows.
