# Appex Contracts

Веб-инструмент для создания и управления договорами на оказание услуг Appex Media.

## Описание

Приложение предназначено для автоматизации создания договоров на следующие виды услуг:
- SMM (продвижение в социальных сетях)
- Разработка сайтов
- SEO продвижение
- Таргетированная и контекстная реклама

## Основные возможности

- ✅ Создание договоров в формате DOCX
- ✅ Встроенный rich-text редактор для редактирования разделов договора
- ✅ Предпросмотр документов перед сохранением
- ✅ Интеграция с Google Sheets для загрузки данных клиентов
- ✅ Поддержка приложений (ТЗ, акты, счета, дополнительные соглашения)
- ✅ История изменений документов (кто, когда, что изменил)
- ✅ Фиксированные данные исполнителя (Appex Media, УНП 193978372)

## Технологический стек

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Document Generation**: docxtemplater
- **Deployment**: Vercel

## Структура проекта

```
appex-contracts/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts      # API для генерации DOCX
│   ├── layout.tsx             # Основной layout
│   ├── page.tsx               # Главная страница
│   └── globals.css            # Глобальные стили
├── config/
│   └── executor.ts            # Конфигурация данных исполнителя
├── next.config.js
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## Установка

```bash
npm install
```

## Запуск в режиме разработки

```bash
npm run dev
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## Сборка для продакшена

```bash
npm run build
npm start
```

## Переменные окружения

Создайте файл `.env.local` со следующими переменными:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
GOOGLE_SHEETS_API_KEY=your_google_sheets_key
```

## Roadmap

- [ ] Настройка базы данных Supabase
- [ ] Интеграция с Google Sheets API
- [ ] Реализация форм для заполнения договоров
- [ ] Интеграция docxtemplater для генерации DOCX
- [ ] Система версионирования документов
- [ ] UI для управления шаблонами

## Автор

Appex Media
