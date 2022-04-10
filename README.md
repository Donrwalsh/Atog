## Current Focus

Why doesn't the dockerized Atog auto-update? It seemed to be serving up stale content. Because of this, it's best to run Atog locally (containerized bighetti is all good, though I'd like to know more about how it works and how to export/backup data from it)

https://docs.nestjs.com/techniques/database#custom-connection-factory learning more about ORM

## Atog

NestJS Api that consumes data from other APIs and translates it as necessary.

`>docker compose up dev` for local development (this doesn't work all that well, just run `>npm run stat:dev`)

## Bighetti

mySql 5.7 database

`>npm install --save @nestjs/typeorm typeorm` running this command manually seems important. A normal `>npm install` misses these packages for some reason.

SQL INT maxes out at 2,147,483,647
bigint maxes out at 9,223,372,036,854,775,807

### Reset Database

`>docker compose down database -v`: removes any previously established volumes ([src](https://stackoverflow.com/questions/59657489/mysql-init-scripts-not-running-with-docker-compose))

`>docker compose up database`: runs entrypoint scripts in `conf.d` directory in order. Any failures that happen with these scripts are quiet and can be troublesome.

### Data 

Movie Entity is very lazy right now. VARCHARs all around! probably should remove boxOffice

**Blueprints**
Currently naively implemented as a flat object structure to get the ball rolling. May end up legitimately versioning this structure if needed.

https://www.w3schools.com/sql/sql_datatypes.asp

Made a few data decisions:
* Decided to skip the derived values since we can just calculate those.
* I applied all fields as individual one-to-one fields on the Blueprint database table. This is not realistic, and serves only to get the ball rolling on the courier integration side. A more maneuverable structure is next up on the list, and I don't think it's worth developing out the atog endpoints until this structure is nailed down. 
* Not a decision, but the crafting upgrades can reference other blueprints. Would be nice to represent that as data.

## Notes

next thing is atog and bighetti need to communicate.

They communicate just fine! The stuff with docker-compose is kind of a crapshoot unfortunately. I need to understand better what's going on there, because it latches onto an old image of the nestjs app and I don't know why. Also would like a better understanding of how the database persists.

As it stands right now, it's best to run atog via an npm command and the database via docker-compose.

I got the Atog find by ImdbId to add a new movie that isn't already in bighetti and to serve up bighetti data first if it exists.

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

