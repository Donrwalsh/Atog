FROM node:16.14-alpine3.14 AS development

WORKDIR /src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:16.14-alpine3.14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]