# [fit] Intro to SQL!
### Brought to you by Galvanize!

---

#Links

- http://www.sql-tutorial.net/SQL-Cheat-Sheet.pdf  
- http://www.sqltutorial.org/
- https://modern-sql.com/use-case/literate-sql
- http://sqlzoo.net/

—--

# When and Why do we use Data?

![original fit](https://d1afx9quaogywf.cloudfront.net/sites/default/files/Logos/facebook-logo_0.png)
![original inline](http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg)
![original inline](https://www.library.wisc.edu/news/wp-content/uploads/sites/6/2017/07/2014.06.25.15.17.32.14_google-logo.jpg)

^Why is data important? Data is king these days.

---

# What is a Relational Database

![inline left 125%](https://s.hswstatic.com/gif/relational-database-chart.jpg)![inline right](http://www.dupuis.me/sites/default/files/DbSearch_001.gif)

^SQL is a relational database management language
^What is a relational Database? It is a database organized by tables. These tables can related to one another in order to simplify tables and also where it's stored in memory. Think of a table like a spreadsheet. Each table has columns and rows. A row is an entity, it represents a collection of data that shares some commonalities. A column is an Attribute. Each data type in that column has to be the same. (i.e. varchar, integer, date.)

---

# SQL

### Structured Query Language
- DDL - Data Definition Language
- DML - Data Manipulation Language
- DCL - Data Control Language

———

#DDL
###Data Definition Language

^ This part of SQL deals with the table in its entirety

—

##SQL became the standard for relational databases in the mid-1980’s. Since then, it has been revised a few times to include a growing set of features. Despite the existence of such standards, most SQL code is not completely portable between different relational database systems without adjustments. The following are popular open source relational database systems that implement the SQL standard.

-MySQL
-PostgresQL
-SQLite

---

## Whereas the following are popular closed source relational database systems that implement the SQL standard.

-Microsoft Access
-Microsoft SQL Server
-Oracle

—--

#Vocab

- Schema
- Entity
- Attribute

^In relational databases, your schema needs to be planned and set first. It tells your database how to store data and where.

—--

#What’s the difference between Data and Information?

^Data are pieces or snippets of facts. Information is a collection of data that relates to one another.

| Date| Store | Sales_Amount|
| --- | --- | --- |
| 10/27/2000 | Boulder| 10.46 |
| 10/28/2000 | Denver | 12.58 |


-Row = Entity or Tuples
-Column = Attribute

—--

#Data Types
- integer
- text
- char
- varchar
- boolean
- serial
- timestamp
- numeric
- and many more

—
# Constraints

- NOT NULL
- UNIQUE
- PRIMARY KEY
- FOREIGN KEY
- also many more

—

#CREATE TABLE

```SQL
CREATE TABLE table_name (
    column_name data_type column_constraint,
	table_constraint
);
```

^  you are going to declare a create table and name it. Then within parenthesis you are going to define your table. First is the column name, ie. Id, store name, etc. Second parameter is the data type. Third parameter is your column constraint. There can be more than one. Lastly, optional is a table constraint. We won’t be going into those today

—

#Example

```SQL
CREATE TABLE stores (
	store_id INT PRIMARY KEY,
	store_loc VARCHAR(100) NOT NULL,
	sales  INT NOT NULL
);
```

—

#ALTER TABLE

```SQL
ALTER TABLE table_name
	ADD new_column data_type column_constraint [AFTER existing_column];
```

```SQL
ALTER TABLE table_name
	MODIFY column_definition;

```

```SQL
ALTER TABLE table_name
DROP column_1,
DROP column_3;
```

—

#DROP TABLE

```SQL
DROP TABLE [IF EXISTS] table_name;
```

```SQL
DROP TABLE table_name1,table_name2,...;
```

---

#DML
### Data Manipulation Language

^We are going to be focusing on Data Manipulation. How we can extract information from a database and use it.

—
#SELECT … FROM

-SQL is structured similar to the English language. The basic command for retrieving data from a database table is to SELECT data FROM a table.  Not surprisingly, the keywords "SELECT" and "FROM" make up the core of a SQL statement.

```SQL
SELECT “COLUMN NAME”
FROM “TABLE_NAME”;
```

---
# SELECT … FROM
- You can select more than 1 row

```SQL
SELECT “COLUMN_1”, “COLUMN_2”
FROM “TABLE_NAME”;
```
- You can select all columns

```SQL
SELECT *
FROM “TABLE_NAME”;
```
- You can select unique values as well

```SQL
SELECT DISTINCT “COLUMN_1”
FROM “TABLE_NAME”;
```

——-
# WHERE

###Sometimes we only want to use a subset of data

```SQL
SELECT *
FROM “TABLE_NAME”
WHERE “CONDITION”;
```

^ Go to SQL Zoo and go through first Lesson

———
#ORDER BY

### When we want to list the data in a particular order

```SQL
SELECT *
FROM “TABLE_NAME”
WHERE “CONDITION”
ORDER BY “COLUMN_NAME” [ASC|DESC];
```

—
# MATHEMATICAL FUNCTIONS

###SQL has built-in mathematical functions to allow us to perform mathematical operations on the data.  Common mathematical functions include:

- SUM
- AVG
- COUNT
- MAX
- MIN

———
# MAX

| Date| Store | Sales_Amount|
| --- | --- | --- |
| 10/27/2000 | Boulder| 10.46 |
| 10/28/2000 | Denver | 12.58 |

```SQL
SELECT MAX (Sales_Amount)
FROM SALES_HISTORY;
```
- Finds the highest Sales Amount from all stores

—--
# MAX (more columns)

| Date| Store | Sales_Amount|
| --- | --- | --- |
| 10/27/2000 | Boulder| 10.46 |
| 10/28/2000 | Denver | 12.58 |

```SQL
SELECT Store, MAX (Sales_Amount)
FROM SALES_HISTORY;
```
- Finds highest sales for each Store

———

# GROUP BY

- However, this SELECT statement by itself is not enough.  To allow SQL to correctly calculate what we want, we need to use the GROUP BY keyword.  In the following example, the Store column after GROUP BY tells SQL to apply the MAX function for each Store

```SQL
SELECT Store, MAX(Sales_Amount)
FROM SALES_HISTORY
GROUP BY Store;
```

———

# GROUP BY

```SQL
SELECT “COLUMN_1”, FUNCTION (“COLUMN_2”)
FROM “TABLE_NAME”
WHERE “CONDITION”
GROUP BY “COLUMN_1”;
```

—--

#HAVING

-Previously we had talked about using the WHERE keyword to filter results.  

-HAVING is used to filter based on the result of a function.

^ -We cannot use WHERE to filter based on the result of a function, because we need to specify the filtering condition after SQL has calculated the function, and consequently any filtering condition based on the function needs to be specified after the GROUP BY phrase.  So we cannot use the WHERE keyword because it is always used before GROUP BY.  


---

#HAVING

```SQL
SELECT “COLUMN_NAME”, FUNCTION(“OTHER_COLUMN_NAME”)
FROM “TABLE_NAME”
GROUP BY “COLUMN_NAME”
HAVING (CONDITION based on FUNCTION);
```

—
#HAVING

- Using the SALES_HISTORY table we had earlier.  If we want to sum the sales amount for each store, but only want to see results for stores with total sales amount greater than 100, we use the following SQL:

```SQL
SELECT Store, SUM(Sales_Amount)
FROM SALES_HISTORY
GROUP BY Store
HAVING SUM(Sales_Amount) > 12;
```

—

#Order of SQL Commands

- SELECT
- FROM
- WHERE
- GROUP BY
- HAVING
- ORDER BY

—

#Links

- http://www.sql-tutorial.net/SQL-Cheat-Sheet.pdf
- http://www.sqltutorial.org/
- https://modern-sql.com/use-case/literate-sql
- http://sqlzoo.net/

—--
