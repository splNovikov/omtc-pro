#!/bin/sh

# Regular start script - only migrations and server start (no seeding)
echo "=== REGULAR START ==="

echo "Running database migrations..."
npx medusa db:migrate

echo "Starting Medusa development server..."
yarn dev
