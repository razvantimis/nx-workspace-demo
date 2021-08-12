FROM node:lts-alpine

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build invest-api ${BUILD_FLAG}


CMD ["node", "./dist/apps/invest-api/main.js"]