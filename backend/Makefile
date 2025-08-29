# OMTC PRO Backend Makefile
# =========================

.PHONY: help first-start start build test clean docker-up docker-down seed

# Default target
help: ## Show this help message
	@echo "OMTC PRO Backend Commands:"
	@echo "=========================="
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

# Development commands
first-start: ## First time setup: run migrations, seed data, and start dev server
	@chmod +x ./first-start.sh
	@./first-start.sh

start: ## Regular start: run migrations and start dev server (no seeding)
	@chmod +x ./start.sh
	@./start.sh

build: ## Build the application
	@yarn build

# Database commands
migrate: ## Run database migrations only
	@npx medusa db:migrate

seed: ## Run database seeding only
	@yarn seed

reset-db: ## Reset database (migrations + seed)
	@echo "Resetting database..."
	@npx medusa db:migrate
	@yarn seed

# Testing commands
test: ## Run all tests
	@yarn test:unit

test-integration: ## Run integration tests
	@yarn test:integration:http

# Docker commands
docker-up: ## Start application with Docker (regular mode, no seeding)
	@docker compose up --build -d

docker-up-first: ## Start application with Docker (first-time setup with seeding)
	@docker compose -f docker-compose.yml -f docker-compose.first-start.yml up --build -d

docker-down: ## Stop Docker containers
	@docker compose down

docker-logs: ## Show Docker logs
	@docker compose logs -f

docker-exec: ## Execute bash in running medusa container
	@docker exec -it medusa_backend_omtc_pro /bin/sh

docker-seed: ## Run seed command in Docker container
	@docker exec medusa_backend_omtc_pro yarn seed

docker-migrate: ## Run migrations in Docker container
	@docker exec medusa_backend_omtc_pro npx medusa db:migrate

# Utility commands
install: ## Install dependencies
	@yarn install

clean: ## Clean node_modules and build artifacts
	@rm -rf node_modules
	@rm -rf build
	@rm -rf .medusa

dev: ## Alias for regular start
	@make start

setup: ## Alias for first-start
	@make first-start

# Production commands
prod-start: ## Start in production mode
	@yarn start
