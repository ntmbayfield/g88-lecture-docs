# [fit]Schema

# [fit]Design

---

# Terms

- Unnormalized
- Normalized
- Denormalized

---

# [fit] Normalization

---

>  Normalization is the process of organizing the columns and tables of a relational database.

---

> Normalization is used to reduce data redundancy and improve data integrity.

---

> Normalization is decomposing a table into less redundant (and smaller) tables without losing information.

---

> The goal is to isolate data so that additions, deletions and modifications of an attribute can be made in just one table.

---

> The changes will be propagated through the rest of the database.

---

Rules

- No repeating rows
- A primary key
- Each field contains only one piece of information.

^ First normal form

---

- All the non key columns are dependent on the primary key
  - Is this unique for this entity?

^ Second normal form

^ Remove subsets of data that apply to multiple rows of a table and place them in separate tables.

^ Create relationships between these new tables and their predecessors through the use of foreign keys

---

> Every non-key attribute ‘must provide a fact about the key, the whole key, and nothing but the key’.

^Third normal form - orders table and customer information.

---

> Why denormalize?

^ Performance

---

# Examples

---

![fit](https://s3-us-west-2.amazonaws.com/lesson-plan-images/normalization_images/Normalization+Exercises+-+Denormalized.jpeg)

---

![fit](https://s3-us-west-2.amazonaws.com/lesson-plan-images/normalization_images/Normalization+Exercises+-+Denormalized+2+(1\).jpeg)

---

![fit](https://s3-us-west-2.amazonaws.com/lesson-plan-images/normalization_images/Normalization+Exercises+-+Denormalized+3.jpeg)