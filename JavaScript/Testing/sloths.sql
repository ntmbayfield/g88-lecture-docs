\c postgres;
DROP DATABASE IF EXISTS knex_sloths_test;
CREATE DATABASE knex_sloths_test;
\c knex_sloths_test;

DROP TABLE IF EXISTS sloths;
CREATE TABLE sloths (
  id serial,
  name text,
  age integer,
  image text
)
