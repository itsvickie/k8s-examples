FROM node:hydrogen-alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY src ./src

FROM build AS development

CMD ["npm", "start"]