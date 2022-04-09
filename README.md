## Current Focus

next thing is atog and bighetti need to communicate.

## Atog

NestJS Api that consumes data from other APIs and translates it as necessary.

`>docker compose up dev` for local development

## Mysql

Database to store previously consumed data that is preferred over additional API calls.

`>docker compose up database`

## Notes

### [First Steps](docs.nestjs.com/firststeps)

node v16.14.2

created with: `>nest new atog`

run with: `>npm run start` (`>npm run start:dev` for live reload)

see output at localhost:3000 (configured via main.ts)

test with `>npm run test`, `:e2e` and `:cov` options available for end to end testing and coverage respectively.

I like swagger, so ran `>npm install --save @nestjs/swagger swagger-ui-express`

see at http://localhost:3000/swagger/, also configured via main.ts

### [Controllers](docs.nestjs.com/controllers)

This page includes a list of out of the box decorators that map to common properties such as the Request example on the mtg controller. Lots of good info to refer back to. Also a breadcrumb to making your own decorators for later. . .

