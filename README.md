# GraphQL-Apollo-Express-Boilerplate

A server boilerplate for using graphql, apollo, and express with postgres

## Installation

To run this boilerplate first do a git clone `git clone https://github.com/JulienAssouline/GraphQL-Apollo-Boilerplate.git`

## Setup

cd into root of folder and run `yarn`

I'm using postgresql so make sure you have that installed on your computer.

Check `default.json` in `config` for postgres settings.

To start the server run `NODE_ENV=development yarn start:dev`

It'll be running on `http://localhost:8080/graphql`

Then you can run in your terminal `yarn db:up` to initialize your db.

To restart your database run `yarn db:reset`.
