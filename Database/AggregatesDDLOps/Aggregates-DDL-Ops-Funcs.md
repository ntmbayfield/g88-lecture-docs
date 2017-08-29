theme: Next, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

# SQL Day 2
## The Sequel

---

## Aggregation with SQL

---

## Objectives

- Write aggregation queries with `COUNT`, `MAX`, `MIN`, `SUM`, `AVG`.
- Explain the role of `GROUP BY` in aggregate queries.
- Use CASE, COALESCE, ORDER BY, IN, DISTINCT, LIKE, BETWEEN, AND/OR, EXISTS
- Be able to ALTER a table
- Use WHERE with several comparison operators
- Explain and use DDL and DML

---

## Rationale

Often when coding business goals, we aren't so much interested in the specifics of one item, but rather we want an overall view. Perhaps over some span of time or set of records.

In the language, the word "by" can alert you that you may be need an aggregate.

E.g.
  - How many sales do we have by week?
  - How much revenue have we made by week?
    * By month? By quarter? By year?

These questions are about stats across all transactions, grouped by some criteria. We can collapse many data points by grouping and using an aggregate function.

---

## Movies DB
```sql
\c postgres;
DROP DATABASE moviedb;
CREATE DATABASE moviedb;
\c moviedb;
DROP TABLE movies;
CREATE TABLE movies (
  id serial,
  title text,
  duration integer,
  rating varchar(10),
  genre text,
  is_3d boolean NOT NULL,
  released_at timestamp with time zone,
  score numeric(3, 1)
);
INSERT INTO movies (title, duration, rating, genre, is_3d, released_at, score) VALUES ('Frozen', 102, 'PG', 'Animation', TRUE, '2013-11-27 00:00:00 UTC', 7.6);
INSERT INTO movies (title, duration, rating, genre, is_3d, released_at, score) VALUES ('X-Men: Apocalypse', 144, 'PG-13', 'Action', TRUE, '2016-05-27 00:00:00 UTC', 7.4);
INSERT INTO movies (title, duration, rating, genre, is_3d, released_at, score) VALUES ('The Princess Bride', 98, 'PG', 'Adventure', FALSE, '1987-10-09 00:00:00 UTC', 8.1);
INSERT INTO movies (title, duration, rating, genre, is_3d, released_at, score) VALUES ('Pulp Fiction', 154, 'R', 'Crime', FALSE, '1994-10-14 00:00:00 UTC', 8.9);
INSERT INTO movies (title, duration, rating, genre, is_3d, released_at, score) VALUES ('Logistics', 51420, 'R', 'Documentary', FALSE, '2012-12-01 00:00:00 UTC', 1.2);
INSERT INTO movies (title, duration, rating, genre, is_3d, released_at, score) VALUES ('Juno', 96, 'PG-13', 'Comedy', FALSE, '2007-12-25 00:00:00 UTC', 7.5);
INSERT INTO movies (title, duration, rating, genre, is_3d, released_at, score) VALUES ('Up', 96, 'PG-13', 'Animation', FALSE, '2009-05-29 00:00:00 UTC', 8.3);
INSERT INTO movies (title, duration, rating, genre, is_3d, released_at, score) VALUES ('The Avengers', 143, 'PG-13', 'Action', FALSE, '2012-05-04 00:00:00 UTC', 8.1);
```

---

## Aggregate Functions: COUNT()

COUNT gives you the number of rows resulting from your query. It accepts either a wildcard (*) or any field/column name. It returns the same count regardless.

```sql
SELECT COUNT(*) FROM MOVIES;
SELECT COUNT(*) FROM MOVIES WHERE duration > 120;
SELECT COUNT(title) FROM MOVIES WHERE duration > 120;
```

---

## Aggregate Functions: MAX(), MIN()

Returns the maximum or minimum value for any given column/field.

```sql
SELECT MAX(duration) FROM movies;
SELECT MIN(duration) FROM movies;
```

---

## Aggregate Functions: SUM(), AVG()

Returns the sum or average overall value for a given column/field

```sql
SELECT SUM(duration) FROM movies;
SELECT AVG(duration) FROM movies;
```

---

## GROUP BY

Sets a condition on rows to match before applying an aggregate function. Think of it as a way to categorize all the existing values of the given field. Once the rows are matched on the GROUP BY clause, then that data is passed to the aggregate function.

```sql
SELECT is_3d, COUNT(*) FROM movies GROUP BY is_3d;
SELECT rating, COUNT(*) FROM movies GROUP BY rating;
SELECT rating, is_3d, COUNT(*) FROM movies GROUP BY rating, is_3d;
```

"is_3d" only has 2 possible values (T/F), so grouping by that field only produces 2 groups.

---

## GROUP BY

What is the average score for movies by genre and rating? Post your queries on Slack.

---

```sql
SELECT genre, rating, AVG(score) FROM movies GROUP BY genre, rating;
```
Turns out that R-rated documentaries are not well received.

---

## HAVING

HAVING is similar to WHERE, except that this filter is applied *after* aggregates and group by rules are calculated.

```sql
SELECT rating, AVG(score) FROM movies GROUP BY rating HAVING rating = 'PG';
SELECT rating, AVG(score) FROM movies GROUP BY rating HAVING AVG(score) > 7.5;
```
Why would I choose the HAVING clause vs a typical WHERE clause?

---

## DDL: Data Definition Language
- Defines DB structure/schema
- CREATE, ALTER, DROP, TRUNCATE, COMMENT, RENAME

## DML: Data Manipulation Language
- Manages data within schema objects
- SELECT, INSERT, DELETE, MERGE

---

## Sequence Generator

Special, single-row table that's used for generating sequential numbers. A serial sequence generator starts with 1 and increments the value by 1 each time the generator is triggered.

When a record without an id value is inserted, the column's sequence generator fills in the next sequential id value.

```sql
\d movies_id_seq
```

---
### ALTER

```sql
ALTER TABLE movies RENAME COLUMN plot TO summary;
ALTER TABLE movies ALTER COLUMN summary TYPE varchar(255);
ALTER TABLE movies ALTER COLUMN summary SET NOT NULL;
ALTER TABLE movies DROP COLUMN summary;
ALTER TABLE movies RENAME TO films;
```

---

We, You do

---

Break

---

### Comparison

```sql
SELECT * FROM authors WHERE age = 22;
```

Slack: Get me all fields from authors who's age is not 22

---

### OR

```sql
SELECT * FROM authors WHERE name = 'bob' OR id=1;
 ```

### AND

```sql
SELECT * FROM authors WHERE name = 'bob' AND id=1;
```

---

### BETWEEN

```sql
SELECT * FROM authors WHERE age BETWEEN 20 AND 30;
SELECT * FROM authors WHERE age >= 20 AND age <= 30;
```

### IS NULL

```sql
SELECT * FROM authors WHERE age IS NULL;
```

---

### Concatenation - ||

```sql
SELECT * FROM authors WHERE name = 'b'||'ob';
SELECT * FROM authors WHERE name = CONCAT('b', 'ob');
```

### Regex (~)

```sql
SELECT * FROM authors WHERE name ~ '^b';
```

---

### LIKE

```sql
SELECT * FROM authors WHERE name LIKE '%b%';
SELECT id, title, genre FROM movies WHERE genre LIKE 'A%';
SELECT id, title, genre FROM movies WHERE genre LIKE '%i%';
SELECT id, title, genre FROM movies WHERE genre NOT LIKE '%i%';
```
Slack: Get title and genre of all movies that are not "Action" movies.

---

### IN / NOT IN

```sql
SELECT * FROM authors WHERE id IN (1,2,3);
```

### ORDER BY

```sql
SELECT * FROM authors ORDER BY age ASC;
```

---

## WHERE

```sql
SELECT id, title, rating FROM movies WHERE rating = 'PG';
SELECT id, title, rating FROM movies WHERE rating <> 'PG';
SELECT id, title, is_3d FROM movies WHERE is_3d IS TRUE;
SELECT id, title, is_3d FROM movies WHERE is_3d IS NOT NULL;
SELECT id, title, score FROM movies WHERE score > 8;
SELECT id, title, score FROM movies WHERE score BETWEEN 7.5 AND 8;
SELECT id, title, score, rating FROM movies WHERE score > 8 AND rating = 'PG';
SELECT id, title, score, rating FROM movies WHERE score > 8 OR rating = 'PG';
SELECT id, title, genre FROM movies WHERE genre IN ('Animation', 'Crime');
SELECT id, title, score FROM movies ORDER BY score DESC;
SELECT id, title, score FROM movies ORDER BY score DESC LIMIT 1;
DELETE FROM movies WHERE score > 9;
```

---

### EXISTS (Subquery)

EXISTS takes SELECT subquery, and if that returns at least one row the result of EXISTS is true. Otherwise, false.

```sql
SELECT EXISTS(SELECT * from authors WHERE id=1);
```

What would this be good for?

---

### DISTINCT

Removes duplicate rows from result set. Returns one row for each group of duplicates for the field value.

```sql
SELECT DISTINCT name FROM authors;
```

---

## CASE

SQL’s way of handling if/then logic. A CASE statement is followed by at least one pair of WHEN and THEN statements. Must end with the END statement. The ELSE statement is optional.

```sql
SELECT title,duration,
CASE
WHEN duration between 0 AND 120 THEN 'short'
WHEN duration between 121 AND 140 THEN 'normal'
WHEN duration between 141 AND 52000 THEN 'verylong'
ELSE 'unknown' END
AS duration_in_text
FROM movies;
```

---

## COALESCE

Returns first non-null argument, null if all arguments are null. Often used to substitute a default value for null values upon select.

```sql
SELECT name, COALESCE(age, -1) FROM owners;
```
