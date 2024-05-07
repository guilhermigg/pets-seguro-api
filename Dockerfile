FROM node:21-alpine AS base

RUN npm install -g pnpm 

FROM base AS dependencies

WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install

FROM base as build
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

EXPOSE 3000

CMD ["pnpm", "start:dev"]