# Используем Node.js 16 Alpine как базовый образ
FROM node:16-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Устанавливаем зависимости
RUN npm install --production=false

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build

# Открываем порт 3000
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"] 