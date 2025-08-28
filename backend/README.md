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

1. **Установка зависимостей:**
   ```bash
   yarn install
   ```

2. **Настройка базы данных:**
   ```bash
   # Настройте DATABASE_URL в .env файле
   ```

3. **Запуск seed данных (первый раз):**
   ```bash
   yarn seed
   ```

4. **Запуск в режиме разработки:**
   ```bash
   yarn dev
   ```

5. **Сборка для продакшена:**
   ```bash
   yarn build
   yarn start
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

- `yarn dev` - запуск в режиме разработки
- `yarn build` - сборка проекта  
- `yarn start` - запуск в продакшене
- `yarn seed` - загрузка seed данных
- `yarn docker:up` - запуск в Docker
- `yarn test:*` - тестирование
