<h1 align="center">
  OMTC PRO
</h1>

<p align="center">
  E-commerce backend built with Medusa.js
</p>

<p align="center">
  <strong>Настроен для российского рынка</strong> • <strong>Валюта: Рубль (RUB)</strong> • <strong>Регион: Россия</strong>
</p>

## Особенности проекта

- 🇷🇺 **Настроен для России**: единственный регион - Российская Федерация
- 💰 **Рубль как основная валюта**: все цены в RUB  
- 📦 **Московский склад**: центр логистики в Москве
- 🚚 **Доставка по России**: стандартная и экспресс доставка
- 🛍️ **OMTC PRO товары**: демо-каталог с брендированными товарами

## Технические характеристики

Этот проект основан на **Medusa.js v2** - современной headless commerce платформе.

### Установленные модули:
- API Key управление
- Аутентификация (email/password)
- Управление товарами и категориями
- Корзина и заказы
- Система доставки
- Управление складами
- Платежная система

## Быстрый старт

### 🎯 Простые команды через Makefile

1. **Установка зависимостей:**
   ```bash
   make install
   ```

2. **Первый запуск (с настройкой БД и demo данными):**
   ```bash
   make first-start
   ```
   
3. **Обычный запуск (без seeding):**
   ```bash
   make start
   ```

4. **Просмотр всех доступных команд:**
   ```bash
   make help
   ```

### 📋 Доступные Make команды:

- `make first-start` - первый запуск с миграциями, seed данными и запуском сервера
- `make start` - обычный запуск с миграциями и запуском сервера (без seed)
- `make build` - сборка проекта
- `make test` - запуск тестов
- `make seed` - только загрузка seed данных
- `make migrate` - только миграции БД
- `make docker-up` - запуск в Docker
- `make clean` - очистка проекта

### 🔄 Альтернативные команды (через yarn)

Если предпочитаете yarn:

1. **Первый запуск:**
   ```bash
   yarn install
   yarn start:first
   ```

2. **Обычный запуск:**
   ```bash
   yarn start:regular
   ```

## Структура проекта

```
backend/
├── src/
│   ├── api/          # Custom API endpoints
│   ├── admin/        # Admin panel customizations
│   ├── jobs/         # Background jobs
│   ├── links/        # Module links
│   ├── modules/      # Custom modules
│   ├── scripts/      # Utility scripts (включая seed.ts)
│   ├── subscribers/  # Event subscribers
│   └── workflows/    # Business workflows
├── medusa-config.ts  # Main configuration
└── package.json
```

## Документация

- [Medusa.js Documentation](https://docs.medusajs.com)
- [API Reference](https://docs.medusajs.com/api)
- [Admin Guide](https://docs.medusajs.com/learn/fundamentals/admin)

## Команды

### Make команды (рекомендуется):
- `make help` - показать все доступные команды
- `make first-start` - первый запуск (миграции + seed + dev сервер)
- `make start` - обычный запуск (миграции + dev сервер)
- `make build` - сборка проекта
- `make seed` - только seed данные
- `make test` - запуск тестов

### Docker команды:
- `make docker-up` - запуск в Docker (обычный режим)
- `make docker-up-first` - первый запуск в Docker (с seed данными)
- `make docker-down` - остановка контейнеров
- `make docker-logs` - просмотр логов
- `make docker-exec` - подключение к контейнеру
- `make docker-seed` - выполнить seed в работающем контейнере

### Yarn команды:
- `yarn dev` - запуск dev сервера
- `yarn build` - сборка проекта  
- `yarn start` - запуск в продакшене
- `yarn seed` - загрузка seed данных
- `yarn start:first` - первый запуск через скрипт
- `yarn start:regular` - обычный запуск через скрипт
- `yarn docker:up` - запуск в Docker (обычный режим)
- `yarn docker:up:first` - первый запуск в Docker (с seed)
- `yarn docker:down` - остановка Docker контейнеров
- `yarn test:*` - тестирование

## Логика запуска

**Первый запуск** (`make first-start`):
1. Запуск миграций базы данных
2. Загрузка демо-данных (товары, категории, склад)
3. Запуск dev сервера

**Обычный запуск** (`make start`):
1. Запуск миграций базы данных  
2. Запуск dev сервера (без seed)

**Docker запуск** (`make docker-up-first` / `make docker-up`):
- `docker-up-first` - первый запуск с настройкой БД и seed данными
- `docker-up` - обычный запуск (только миграции + dev сервер)

> ⚡ **Важно**: Seed данные загружаются только при первом запуске, что значительно ускоряет последующие старты приложения.

## Docker быстрый старт

1. **Первый запуск в Docker:**
   ```bash
   make docker-up-first
   ```

2. **Последующие запуски:**
   ```bash
   make docker-up
   ```

3. **Проверка логов:**
   ```bash
   make docker-logs
   ```
