# [fit] Intro to SQL

---

![fill](http://www.anrcg.com/wp-content/uploads/2014/12/database-wordcloud.jpg)

---

#Objectives
By the end of this lesson you will be able to:
- Understand what SQL is
- Explain why we use SQL
- Add, Update, Delete data in a database
- Retrieve info in a database

---

# When and Why do we use Data?

![original fit](https://d1afx9quaogywf.cloudfront.net/sites/default/files/Logos/facebook-logo_0.png)
![original inline](http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg)
![original inline](https://www.library.wisc.edu/news/wp-content/uploads/sites/6/2017/07/2014.06.25.15.17.32.14_google-logo.jpg) 

^Why is data important? Data is king these days. 

^Whichever industry you work in, or whatever your interests, you will almost certainly have come across a story about how “data” is changing the face of our world. It might be helping to cure a disease, boost a company’s revenue, make a building more efficient or be responsible for those targeted ads you keep seeing.

^In computing and business (most of what you read about in the news when it comes to data – especially if it’s about Big Data), data refers to information that is machine-readable as opposed to human-readable.  

^Machine-readable (or structured data) refers to information that computer programs can process. A program is a set of instructions for manipulating data. And when we take data and apply a set of programs, we get software. In order for a program to perform instructions on data, that data must have some kind of uniform structure.

^Data is pieces or snippets of facts. Information is a collection of data that relates to one another.

^Turn and Talk about the difference between Data and Information.

---

# What is a Relational Database

![inline left 125%](https://s.hswstatic.com/gif/relational-database-chart.jpg)![inline right](http://www.dupuis.me/sites/default/files/DbSearch_001.gif)

^SQL is a relational database management language
^What is a relational Database? It is a database organized by tables. These tables can relate to one another in order to simplify tables and also where it's stored in memory. Think of a table like a spreadsheet. Each table has columns and rows. A row is an entity, it represents a collection of data that shares some commonalities. A column is an Attribute. Each data type in that column has to be the same. (i.e. varchar, integer, date.)

---

#Vocab

- Schema
- Entity
- Attribute
- Data Types

^In relational databases, your schema needs to be planned and set first. It tells your database how to store data and where. 

—

# Think of your tables like a spreadsheet

| Date| Store | Sales_Amount|
| --- | --- | --- |
| 10/27/2000 | Boulder| 10.46 |
| 10/28/2000 | Denver | 12.58 |


-Row = Entity or Tuples
-Column = Attribute

^We've learned about ERDs and Schemas. We've learned about Data Normalization. Now we are going to learn about how to create and Manipulate databases to hold information for our programs.

---

[.autoscale:true]
# SQL
 **Open Source**
-MySQL
-PostgresQL
-SQLite

 **Proprietary**
-Microsoft Access
-Microsoft SQL Server
-Oracle

^SQL became the standard for relational databases in the mid-1980’s. Since then, it has been revised a few times to include a growing set of features. Despite the existence of such standards, most SQL code is not completely portable between different relational database systems without adjustments. The following are popular open source relational database systems that implement the SQL standard.

———

![left fit](https://safenet.gemalto.com/uploadedImages/images/Logos/postgresql-logo.png)

##Why?

- Fully open-sourced
- Been in development for over 15 years
- Fully ACID compliant (Atomicity, Consistency, Isolation, Durability)
- Exceptional documentation

^Atomicity -all or nothing. If transaction is partly wrong its all wrong
^ Consistency - Any transaction will bring the database from one valid state to another
^Isolation - The concurrent execution of transactions results in a system state would be obtained if they were executed one after another
^ Durability - Once a transaction has been committed, it will remain so even if there is a power outage, crash, or error

---

### Structured Query Language

- DDL - Data Definition Language
- DML - Data Manipulation Language
- DCL - Data Control Language

**SQL is structured similar to the English language.**

^SQL is made up of 3 languages and reads like English for the most part.

---
# Postgresql Command Line Tools
- \h - Get help
- \c - Connect to a database
- \l - List all databases you can see in Postgres
- \dt - Describe all tables in the current database
- \d [tablename] - Describe the columns of a table
- \q - Quit

---

#DDL
###Data Definition Language

^ This part of SQL deals with the table in it’s entirety
^ Dealing with Creating tables, updating tables, and deleting tables

—

![left 110%](http://www.dupuis.me/sites/default/files/DbSearch_001.gif)

| ID| NameID | CharacterID| MovieID | RoleID | Note |
| --- | --- | --- | --- | --- | --- |
| 1 | 10068| 304 | 1006583294 | 1 | "Hugh Jackman playing Wolverine in X-Men" |
| 2 | 16456 | 653 | 1006583294 | 2 | "Halle Berry playing Storm in X-Men" |

^Let's look at this table
^Cold Call : Entity, Attribute, Data Type
^ Attributes are defined with 3 values : Name of the Column, Data Type, and Constraints

---

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

[.autoscale:true]

#ALTER TABLE

```SQL
ALTER TABLE table_name
	ADD new_column data_type column_constraint;
```

```SQL
ALTER TABLE table_name
	ALTER COLUMN column_name TYPE new_data_type;
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
^ Activity : White Board exercise: Groups of 2 Create a Table for Pets. Each Pet should have at least 5 attributes. 2 minutes. Then cold call:Alter Table, Drop table, 2 constraints, 3 data types

---

#DML
### Data Manipulation Language

^So we've learned how to create tables and change them or delete them. Now how can we access data from them?
^ Think of CRUD what would this process represent?

---

#INSERT

To add Data into your table you need to INSERT that information

```SQL
INSERT INTO table_name 
VALUES(column1, column2, column3);
```

```SQL
INSERT INTO sales 
VALUES('10/27/2000, 'Boulder', 10.46);
```

```SQL
INSERT INTO table_name (column1_name, column3_name)
VALUES(column1, column3);
```
^ You can add data altogether or if you don't have all the information you can insert only a few items, as long as they are nullable!
^ You can also insert multiple rows in a single command by adding commas between parenthesis. Between Parenthesis is one entity

—
#SELECT … FROM

- The basic command for retrieving data from a database table is to SELECT data FROM a table.  Not surprisingly, the keywords "SELECT" and "FROM" make up the core of a SQL statement. 

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
[.autoscale:true]
# WHERE

###Sometimes we only want to use a subset of data

```SQL
SELECT *
FROM “TABLE_NAME”
WHERE “CONDITION”;
```

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

[.autoscale:true]

# GROUP BY

| Date| Store | Sales_Amount|
| --- | --- | --- |
| 10/27/2000 | Boulder| 10.46 |
| 10/28/2000 | Denver | 12.58 |
| 08/16/1998 | Boulder| 36.33 |
| 04/03/2015 | Denver | 33.87 | 
 

```SQL
SELECT MAX (Sales_Amount)
FROM Sales;
```
- Finds the highest Sales Amount from all stores

—--
# GROUP BY

| Date| Store | Sales_Amount|
| --- | --- | --- |
| 10/27/2000 | Boulder| 10.46 |
| 10/28/2000 | Denver | 12.58 |
| 08/16/1998 | Boulder| 36.33 |
| 04/03/2015 | Denver | 33.87 | 

```SQL
SELECT Store, MAX (Sales_Amount)
FROM Sales;
```
- Finds highest sales for each Store
^This won't work. Needs to be in a group by clause
———

# GROUP BY

- However, this SELECT statement by itself is not enough.  To allow SQL to correctly calculate what we want, we need to use the GROUP BY keyword.  In the following example, the Store column after GROUP BY tells SQL to apply the MAX function for each Store

```SQL
SELECT Store, MAX(Sales-Amount)
FROM Sales
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

-We cannot use WHERE to filter based on the result of a function, because we need to specify the filtering condition after SQL has calculated the function, and consequently any filtering condition based on the function needs to be specified after the GROUP BY phrase.  So we cannot use the WHERE keyword because it is always used before GROUP BY.  

-HAVING is used to filter based on the result of a function. 

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
FROM Sales
GROUP BY Store
HAVING SUM(Sales_Amount) > 12;
```

—

#Order of SQL Commands

- SELECT
- FROM
- JOIN
- WHERE
- GROUP BY
- HAVING
- LIMIT
- ORDER BY

—

#Update

```SQL
UPDATE table_name
SET column_name = new_value
WHERE column_name = original_value;
```

^I encourage you to check out the docs for this. There's more you can do with it for sure.

---

#Delete

```SQL
DELETE FROM table_name;
```

```SQL
DELETE FROM table_name
WHERE column_name = certain_value;
```

^ Yikes! take a breather. that was a lot of information. Let's summarize!
^Code along

---

# Bringing this altogether!
![inline fit](./client-server-database-relationship.png)

^ You know how to make and AJAX call or an API request
^ You know an API request gets translated through the HTTP pathway to a server
^ You know how to create a server
^ You know how to create a routes
^ You now know how to create, read, update, and delete information from your database
^ Tomorrow you will learn how to connect your routes to your database to make this a seamless interaction!
^ You did it! You are 24 hours away from being full stack developers! Congratulations 

---

#Links

- http://www.sql-tutorial.net/SQL-Cheat-Sheet.pdf
- http://www.sqltutorial.org/
- https://modern-sql.com/use-case/literate-sql
- http://sqlzoo.net/

—--

#Objectives
By the end of this lesson you will be able to:
- Understand what SQL is
- Explain why we use SQL
- Add, Update, Delete data in a database
- Retrieve info in a database
