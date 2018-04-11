theme: Next, 1
autoscale: true
slidenumbers: true
<!-- @author: Pete Silva -->

# SQL JOINs and Relations

---

## Objectives
- List and explain four types of joins
- Use correct SQL join for given problem
- Join multiple tables in one query

---

## Why

Until now we've only done single table queries mostly. Sometimes you want to return data from multiple related tables with one query. For example returning a blog post and all of it's comments, or all ingredients needed for a recipe.

The **JOIN** clause lets us do that, and it is more efficient than trying to do it programmatically with multiple queries from JS or similar.

---

## Types of JOINs
- INNER, LEFT, RIGHT, FULL OUTER
- A JOIN lets you query the columns/fields from two tables, and return a result set as if they were one table.

---

## Example
Imagine we have two related tables: **"articles"** and **"comments"**. An article can exist without comments, but a comment must be associated with an article. Therefore there is a field "article_id" in table "comments" whose value represents the related article id.

---
You explain:

```sql
\c postgres;
DROP DATABASE articledb;
CREATE DATABASE articledb;
\c articledb;
DROP TABLE comment;
DROP TABLE article;
DROP TABLE author;
CREATE TABLE author (
  author_id serial primary key,
  name text
);
CREATE TABLE article (
  id serial primary key,
  title text,
  body text,
  author_id integer
);
CREATE TABLE comment (
  id serial primary key,
  name text,
  body text,
  article_id integer
);
INSERT INTO article (title, body, author_id) VALUES('You will not believe...', 'Biloxi, MS- Local man Ernest Weaver...', 1);
INSERT INTO article (title, body, author_id) VALUES('We dare you to read...', 'A story that will melt your heart with kittens...', 2);
INSERT INTO article (title, body, author_id) VALUES('This is not clickbait', 'Local squirrel wrangler finds himself in a serious situation...', 3);
INSERT INTO comment (name, body, article_id) VALUES('Sally', 'This was very believable.', 1);
INSERT INTO comment (name, body, article_id) VALUES('Abraham', 'I love Biloxi.', 1);
INSERT INTO comment (name, body, article_id) VALUES('Miranda', 'I came for the kittens. I stayed for the prose.', 2);
INSERT INTO comment (name, body, article_id) VALUES('Ezekiel', 'Meh, I like turtles.', 2);
INSERT INTO comment (name, body, article_id) VALUES('Lisa', 'Not impressed. Do it again.', 7);
INSERT INTO author (name) VALUES('E Hemingway');
INSERT INTO author (name) VALUES('W Burroughs');
```

---

### INNER JOIN
Only the rows in BOTH tables where the ON condition is met.

```sql
SELECT article.id, article.title,
comment.id, comment.name, comment.body
FROM article INNER JOIN comment
ON article.id = comment.article_id;
```

- Aliasing: table.column is helpful

![right fit](http://www.dofactory.com/Images/sql-inner-join.png)

---

### LEFT JOIN
All rows of the left table + matching rows of the right where the ON condition is met. Flip for RIGHT JOIN.

```sql
SELECT article.id, article.title,
comment.id, comment.name, comment.body
FROM article LEFT JOIN comment
ON article.id = comment.article_id;
```
![right fit](http://www.dofactory.com/Images/sql-left-join.png)

---

### FULL OUTER JOIN
All rows from the left and right tables.

```sql
SELECT article.id, article.title,
comment.id, comment.name, comment.body
FROM article FULL OUTER JOIN comment
ON article.id = comment.article_id;
```

![right fit](http://www.dofactory.com/Images/sql-full-join.png)

---

### Paired Research
- When would you use LEFT/RIGHT vs INNER vs FULL OUTER JOINs?

---

### Chained JOINs

```sql
SELECT article.title, comment.name, comment.body, author.name
FROM article LEFT JOIN comment
ON article.id = comment.article_id
```

How to join up author table?
