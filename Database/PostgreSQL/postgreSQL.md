![](img/postgres.png)

# Postgres

---

#Open the article

---

![](img/information.jpg)

# Data

# vs 

# Information

---

![](img/yinyang.png)

## What's the difference between data and information?

---

>  Take a minute to write down how you'd explain the difference between data and information to a friend. Then, turn to a neighbor and share what you wrote.





---

![](img/entity.jpg)

## What's an entity?

---

> Turn to a neighbor and consider how you'd describe a `pet` entity. Think of at least five pieces of information that are essential for being a pet.

---

![](img/server.jpg)

## How do server-side web applications manage information?

^3 layers - Presentation(Client/Chrome) -> Service (Node.js) -> Database System

---

![](img/Screen Shot 2016-11-14 at 7.17.05 AM.png)

---

![](img/database.png)

# Relational Database System

---

![](img/erd.png)

## A database based on the relational mode.

---

## The relational model represents information in tables.

- An entity is a row
- Attributes are columns

---

> Think of it like a spreadsheet.

---

## All values in a column must be of the same type.

---

> In your own words, write down what a relational database system means to you. After about 30 seconds, I will cold call on the class and ask what was written down.

---

![](img/butWhy.gif)

^Why is this useful?

^Example separating out data into tables.

^ERDs

^Data redundancy / Data Integrity

---

![](img/sql.png)

# SQL

> The language of most modern relational database management systems.

---

### SQL became an official standard in the mid-1980's. Since then, it has been revised a few times to include a growing set of features.

---

### Despite the existence of such standards, most SQL code is not completely portable between different relational database systems without adjustments.

---

- PostgreSQL (open)
- MySQL (open)
- SQLite (open)
- Microsoft Access (closed)
- Microsoft SQL Server (closed)
- Oracle (closed)

---

![](img/postgres.png)

# What is PostgreSQL?

---

### **PostgreSQL** is a powerful, open source relational database system that's been around since 1996.

---

### PostgreSQL runs on all major operating systems, including Linux, Mac OS X, and Windows.

---

### In addition, PostgreSQL has native interfaces for a number of programming languages, including JavaScript, and is known for its [exceptional documentation](https://www.postgresql.org/docs/current/static/).

---

### PostgreSQL is fully ACID (atomicity, consistency, isolation, durability) compliant and has a vast amount of [built-in data types](https://www.postgresql.org/docs/current/static/datatype.html#DATATYPE-TABLE). The most common of these data types include the following

----

- `boolean`
- `character` (`char`)
- `character varying` (`varchar`)
- `integer`
- `numeric`
- `serial`
- `text`
- `timestamp`

---

### PostgreSQL is a sophisticated relational database system.

^ A database server manages a database cluster.

^ A database client connects to a database server.

^ A database client sends SQL commands to a database server.

^ A database server sends rows of information back to a database client.

^ A single database cluster often contains multiple databases.

^ A single database often contains multiple tables.

^ A single table often contains multiple rows of information.

^ Rows are automatically persisted to the hard disk by the database server.

---

> Lets install Postgres!