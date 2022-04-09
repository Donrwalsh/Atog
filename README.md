## Current Focus

next thing is atog and bighetti need to communicate.

They communicate just fine! The stuff with docker-compose is kind of a crapshoot unfortunately. I need to understand better what's going on there, because it latches onto an old image of the nestjs app and I don't know why. Also would like a better understanding of how the database persists.

As it stands right now, it's best to run atog via an npm command and the database via docker-compose.

I got the Atog find by ImdbId to add a new movie that isn't already in bighetti and to serve up bighetti data first if it exists.

## Atog

NestJS Api that consumes data from other APIs and translates it as necessary.

`>docker compose up dev` for local development (this doesn't work all that well, just run `>npm run stat:dev`)

## Bighetti

mySql 5.7 database

Database to store previously consumed data that is preferred over additional API calls.

`>docker compose up database`

Movie Entity is very lazy right now. VARCHARs all around! probably should remove boxOffice

`>npm install --save @nestjs/typeorm typeorm` running this command manually seems important. A normal `>npm install` misses these packages for some reason.

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

