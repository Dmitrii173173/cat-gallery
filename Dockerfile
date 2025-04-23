# Используем Node.js 18 Alpine как базовый образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --legacy-peer-deps

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем serve для раздачи статических файлов
RUN npm install -g serve

# Открываем порт 3000
EXPOSE 3000

# Запускаем приложение через serve для раздачи статического контента
CMD ["serve", "-s", "build", "-l", "3000"] 