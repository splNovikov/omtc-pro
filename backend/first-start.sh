#!/bin/sh

# First run script - includes database setup, migrations, seeding, and server start
echo "=== FIRST RUN SETUP ==="

echo "Running database migrations..."
npx medusa db:migrate

echo "Seeding database with initial data..."
yarn seed

echo "Starting Medusa development server..."
yarn dev
