# 🛍️ osystem-shop

Небольшое приложение на **Next.js**, демонстрирующее витрину товаров и корзину покупок с сохранением состояния в `localStorage`.

---

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm install
# или
yarn install

# Запуск в режиме разработки
npm run dev
# или
yarn dev

# Проверка типов
npm run typecheck
# или
yarn typecheck

# Линтинг и автоформатирование
npm run lint
npm run format
```

## 🧱 Особенности

- ✅ **Next.js App Router** с поддержкой `app/` структуры
- ✅ Хранилище состояния реализовано через [`zustand`](https://github.com/pmndrs/zustand)
- ✅ Все данные корзины и список просмотренных товаров сохраняются в `localStorage`
- ✅ Прокси-запросы к внешнему API через `/api/proxy/[...slug]`
- ✅ Поддержка TypeScript
- ✅ Стилизация с помощью Tailwind CSS