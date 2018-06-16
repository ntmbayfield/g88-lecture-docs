# Objectives

* Normalizes data to the Third Normal Form

---

# Data Normalization

A way to make your data more robust by removing duplicates and reducing sources of truth.

---

## Zero Normal Form (0NF)

**It's the Wild West for data out there.**

---

###  `instructor` table:

| name | position | hobby | hobby2 |
| ---- | -------- | ----- | ------ |
| Kyle | Lead | Databases | |
| Danny | LI | Bird Watching | Hiking, Camping |
| Danny | Instructor | Bird Watching | |
| CJ | Inst | Games | Skiing |

---

###  `recipe` table:

| name | ingredients |
| ---- | ------------ |
| Banana Bread | Bananas,Sugar,Flour, Baking Powder |
| Chocolate Pudding | Chocolate, Milk, Sugar, Corn Starch, Salt, Vanilla |
| Pulled BBQ Chicken | Salt, BBQ, Chicken |
| Peanut Butter & Jelly | Peanut Butter, Jelly, Bread |

---

### Attributes

* Duplicated values
* Rows aren't uniquely identified
* Inconsistent field constraints

---

## First Normal Form (1NF)

**Make everything atomic. Indivisible.**

---

### Exercise

`instructor` table:

| name | position | hobby | hobby2 |
| ---- | -------- | ----- | ------ |
| Kyle | Lead | Databases | |
| Danny | LI | Bird Watching | Hiking, Camping |
| Danny | Instructor | Bird Watching | |
| CJ | Inst | Games | Skiing |

Reduce the number of `hobby` columns.

Explode the `hobby` lists to rows.

---

### 1NF Attributes

* **Cells can only contain a single indivisible value.**
* A column can only contain 1 type of value.
* No 2 Columns can share an attribute type.
* Order of columns and rows do not matter.

---

How can we make it better (1NF)?

`recipe` table:

| name | ingredients |
| ---- | ------------ |
| Banana Bread | Bananas,Sugar,Flour, Baking Powder |
| Chocolate Pudding | Chocolate, Milk, Sugar, Corn Starch, Salt, Vanilla |
| Pulled BBQ Chicken | Salt, BBQ, Chicken |
| Peanut Butter & Jelly | Peanut Butter, Jelly, Bread |

---

## Second Normal Form (2NF)

**When a composite key is present, remove all non-key columns that do not depend on the composite key.**

---

### Exercise

- What is the composite key?
- How can we make it better (2NF)?

`bird_spotting` table:

| **person** | **bird** | number_spotted | latin_name |
| -------- | ----------- | ------ | ----------- |
| Danny | Towhee | 3 | Pipilo maculatus |
| Danny | Sparrow | 12 | Passer domesticus |
| Elana | Sparrow | 2 | Passer domesticus |
| Danny | Junco | 5 | Junco hyemalis |

^Move `latin_name` to the correct table.

---

### 2NF Attributes

* All attributes are dependent on the composite key
* All transitive attributes go in another table

---

## Third Normal Form (3NF)

**Remove Transitive Dependencies.**

> Every non-key attribute must provide a fact about the key, the whole key, and nothing but the key.
> -- Bill Kent

---

### Exercise

`person` table:

| **name** |
| -------- |
| Danny |
| Kyle |

---

`winner` table:

| **event** | winner | height | amount | food |
| --------- | ------ | ------ | ------ | ---- |
| Diet Coke Chug | Kyle | 5'10" | 20 | cans |
| Pancake Snarfing | Danny | 6'1" | 10 | pancake stacks |
| Prune Pruning | Danny | 6'1" | 80 | prunes |

Describe a transitive property.

"If I update any of these columns, do any other columns need to change?"

Move the `height` to the `person` table.

---

### Attributes

* All columns are related to the primary key.
* If another column needs to be updated when a column is updated, it is transitive.

---

## Ratio

`person` table:

| **name** |
| ---- |
| Danny |
| Roberto |

---

`blog_post` table:

| **id** | name | topic | ad_revenue |
| ------ | ---- | ----- | ---------- |
| 0 | Danny | JS | $1 |
| 1 | Roberto | Go | $2 |
| 2 | Roberto | JS | $2 |
| 3 | Danny | Design | $1 |

"Make these tables 3NF"

---

1NF = Do NOT have multiple values in a single column for any given row
2NF = If you have columns not functionally dependent on the primary key, then move it to a new table
3NF = Join tables together on ID to avoid transitive dependence
