# Joins

![fit original](./img/joins.jpg)

---


# Joins are where SQL gets magical.

![fit original](./img/magic.png)

---

# Joins are how you utilize the relational part of the database.

![fit original](./img/wrench.jpg)

---

# Without joins, your database is essentially useless

![fit right ](./img/useless.jpg)

---

## Objectives

By the end of this lesson you will be able to:

- Explain what a primary key is
- Explain what a foreign key is
- Explain the difference between inner and outer joins
- Perform a join using SQL

---

# Primary Key

```sql
CREATE TABLE students(
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE bnbs(
  id INTEGER PRIMARY KEY,
  name TEXT
);
```

^ primary key is the field that makes the record unique

---

# Foreign Key

```sql
CREATE TABLE bnbs_students(
  id INTEGER PRIMARY KEY
  bnb_id INTEGER,
  student_id INTEGER,
  FOREIGN KEY(bnb_id) REFERENCES bnbs(id),
  FOREIGN KEY(student_id) REFERENCES students(id),
  url TEXT
);
```
^ foreign key is the primary key that a field references from another table

---

# Inner and Outer Joins

- JOIN is equivalent to INNER JOIN and returns only what the tables have in common
- FULL OUTER JOIN returns all combinations
- a CROSS JOIN is all combinations of a single table joined with itself

---

# Left and Right

- LEFT JOIN and RIGHT JOIN are both OUTER joins and return all combinations
- Left - Returns SELECT's rows
- Right - Returns JOIN's rows
- use the WHERE clause to exclude rows

---

![fit](./img/Visual_SQL_JOINS_orig.jpg)

^ Let's talk about these:
left, left with a constraint
right, right with a constraint
inner
full outer, full outer with a constraint

---

![fit](./img/hair-eye-join.png)

^ -- everyone who has both eye and hair color listed
--everyone in both lists
--everyone who has a hair color listed
-- everyone who has an eye color listed
-- who do we still need an eye color for? We can't find this out by the eye table alone. We need to join the hair and eye tables to get the data we require.
-- who do we still need hair color for?


---

![left](./img/hair-eye-join.png)

What will the following queries give us?

Cross Join

```sql
SELECT *
FROM hair AS hair1, hair AS hair2;
```

---

![left](./img/hair-eye-join.png)

What will the following queries give us?

Inner Join

```sql
SELECT *
FROM hair INNER JOIN eyes
ON hair.username = eyes.username;
```

Full Outer Join

```sql
SELECT *
FROM hair FULL OUTER JOIN eyes
ON hair.username = eyes.username;
```
---

![left](./img/hair-eye-join.png)

What will the following queries give us?

Left Join

```sql
SELECT *
FROM hair
LEFT JOIN eyes
ON hair.username = eyes.username;
```

Right Join

```sql
SELECT *
FROM hair
RIGHT JOIN eyes
ON hair.username = eyes.username;
```
---

# Join Table [Many to Many]

![fit left](./img/multijoins.png)

What if you have a join table and want to output a table that has readable information? What will the following query give us?

```sql
SELECT bnbs.name AS "BnB Name",
       students.name AS "Student Name"
FROM students
JOIN bnbs_students
ON bnbs_students.student_id = students.student_id
JOIN bnbs
ON bnbs_students.bnb_id = bnbs.bnb_id;
```

---

#Review Objectives

- Explain what a primary key is
- Explain what a foreign key is
- Explain the difference between inner and outer joins
- Perform a join using SQL

---

# [Time to Practice](http://www.sqlzoo.net/wiki/More_JOIN_operations)

^ More practice - read the join article and do http://www.sqlzoo.net/wiki/More_JOIN_operations.
