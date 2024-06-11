FROM node:hydrogen-alpine

WORKDIR /app

COPY .env ./
COPY package.json ./
COPY package-lock.json ./
COPY src ./src

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]