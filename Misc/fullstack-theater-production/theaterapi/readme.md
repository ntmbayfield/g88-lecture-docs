# Full Stack Application Mystery Theater API

## Setup

- `npm install`
- `createdb theater`
- `knex migrate:latest`
- update the seed file so that the `didit: true` lives on the option you want to be true this time
- `knex seed: run`
- `nodemon` to run the server (on port 3000)
- open fullstacktheatercode.html (one directory up from this api directory) to see the form that will interact with this server (yes, I should have built them together, but I built the first two files without thinking I was also going to build a server and now....time, lol)
