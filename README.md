
# 🚀 Тестовое задание (alfa)

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://alfa-test-rust.vercel.app/products)
[![Next.js](https://img.shields.io/badge/Next.js-13-blue?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.9-purple?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)

Изначальная загрузка и рендеринг данных происходит на сервере, затем инициализируется стейт,
и рендер происходит на клиенте. В качестве публичного API был выбран [fakeStoreApi](https://fakestoreapi.com/). Данные только загружаются с ресурса, дальнейшие
манипуляции с данными, в соответствии с заданием, происходят на клиенте. 

## 🔥 Демо

👉 [Посмотреть демо](https://alfa-test-rust.vercel.app/)


## 🛠 Технологии

- **Фреймворк**: [Next.js 13](https://nextjs.org/) (App Router)
- **Стилизация**: [Tailwind CSS](https://tailwindcss.com/)
- **Формы**: [React Hook Form](https://react-hook-form.com/) с валидацией
- **State-менеджмент**: [Redux Toolkit](https://redux-toolkit.js.org/) 
- **Иконки**: [Heroicons](https://heroicons.com/)
- **Деплой**: [Vercel](https://vercel.com/)

## ✨ Было реализовано

✅ **Динамическая фильтрация по названию товара**    
✅ **Базовый адаптивный дизайн**   
✅ **Фильтрация по избранным товарам**     
✅ **Фильтрация по популярности**   
✅ **Добавление/удаление товара**     
✅ **Редактирование товара**     
✅ Интеграция с **FakeStore API**   

## 🛠 Установка и запуск

1. Клонировать репозиторий:
   ```bash
   git clone https://github.com/ваш-username/alfa-test.git
   ```
2. Установить зависимости:
   ```bash
   npm install
   # или
   yarn install
   ```
3. Запуск development-сервера:
   ```bash
   npm run dev
   # или
   yarn dev
   ```
