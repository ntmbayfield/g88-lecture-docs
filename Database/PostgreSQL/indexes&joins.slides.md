## Objectives Indexes

+ Explain what an index is.
+ Explain why an index is useful.
+ Use indexes to improve the speed of information retrieval in PostgreSQL.

---

## Research on your own:

+ What an index is?
+ When do you use an index?
+ What is the syntax for creating an index?

---

## Objectives Joins
+ Explain what an outer join is
+ Be able to write right and left outer joins
+ Be able to refactor a one to many table into a proper many to many table structure

---

## Research
+ What is the difference between and inner join and an outer join?
+ Find an example of a left outer join and be able to explain it
+ Find an example of a right outer join and be able to explain it

---

## put this in a file called movies.sql

```
begin;

create table movies(
  id serial primary key,
  title varchar
);

create table actors(
  id serial primary key,
  name varchar,
  movie_id int references movies(id)
);

insert into movies values (default, 'Star Wars');
insert into movies values (default, 'Star Trek');
insert into movies values (default, 'Starship Troopers');

insert into actors values (default, 'Kevin Bacon');
insert into actors values (default, 'Carrie Fisher', (select id from movies where title = 'Star Wars'));
insert into actors values (default, 'William Shatner', (select id from movies where title = 'Star Trek'));

commit;
```

---

## setup
```
createdb movies

psql -d movies < movies.sql

```

---

What kind of join is this? Of Data does it return?

```
select * from movies m join actors a on m.id = a.movie_id;
```

---

What types of joins are these.  What kind of data would it return?  How would you explain it in plain English?

```

select * from movies m left join actors a on m.id = a.movie_id;

select * from movies m right join actors a on m.id = a.movie_id;

select * from actors a left join movies m on m.id = a.movie_id;

```

---

insert into movies (title) values ('Blade Runner');

insert into actors values (default, 'Harrison Ford', (select id from movies where title = 'Star Wars' or title = 'Blade Runner'));

---

create table movie_actors (
  id serial primary key,
  movie_id int references movies(id) not null,
  actor_id int references actors(id) not null
);

create unique index on movie_actors (movie_id, actor_id);

insert into movie_actors (movie_id, actor_id)
select a.movie_id, a.id from actors join movies m on m.id = a.movie_id;
