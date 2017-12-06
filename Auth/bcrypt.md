#[fit]BCrypt

---

# Objectives
* Use the bcryptjs library to hash a plaintext password
* Use the bcryptjs library to compare a plaintext password to an already hashed password

---

#BCrypt gives us
1. Good cryptographic hashing algorithm. (nice and slow! takes forever to crack.)
2. Automatically generated salts.
3. Control over the computational complexity.

---

#BCrypt - How It Works
See algorithm on wikipedia. Think of it as a loop, just hashing your password a bunch of times with. "Hashing" is an operation like "xor".

---

#Cost
The module will use the value you enter and go through 2^rounds iterations of processing.

![inline](img/bcrypt.png)

---

#BCrypt - How To Use

```javascript

bcrypt.hash(password, saltRounds);

```

returns

```javascript

$2a$08$.jEA1FSMXOSGQhLXrKkN9.k9gyad8xN6r76YqOIzoA318fhoqUp7a

```

To Compare

```javascript

bcrypt.compare(plainTextPassword, digest);

```

---

# Objectives
* Use the bcryptjs library to hash a plaintext password
* Use the bcryptjs library to compare a plaintext password to an already hashed password

---

#Questions?
