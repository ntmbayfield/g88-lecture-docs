#[fit]Authentication

---

# Objectives
- Explain Identification and Authentication.
- Explain why passwords are terrible.
- Explain what makes a good hashing algorithm.
- Store a password *securely* using BCrypt.

---

![](img/id.jpg)

^Identification

^Who am I?
^How do I prove it?

---

![](img/login.jpg)

---

![fit](img/gawker_sony_reuse.png)

---

![fit](img/worstPasswords.png)

---

![fit](img/passwordRules.gif)

---

![fit](img/passwordStrength.png)

---

#[fit]Storing Passwords

^Plaintext

---

![](img/ramblerRuHack.png)

---

#First Rule

---

#Never store passwords in plain text.

---

#Second Rule

---

#**Never store passwords in plain text!**

---

#Always ask: 
#Do I actually need to store this?

^What if there was a way to verify that a password was correct, without knowing the original password?

---

![](img/formula.jpg)

#[fit]Hashing Algorithms

---

![](img/oneway.jpg)

^Password is one way.

---

![fit](img/sameSize.png)

^Hash needs to be the same size.

---

![](img/easyButton.jpg)

---

![](img/collision.jpg)

^No Collisions!

---

![](img/avalanche.jpg)

---

![fit](img/AvalancheEffect.png)

^http://www.miraclesalad.com/webtools/md5.php

---

![right](img/question.jpg)

#Are We Safe?

^e10adc3949ba59abbe56e057f20f883e

^http://md5cracker.org/

---

![fit](img/rainbowTable.jpg)

^Rainbow Tables/Precomputed Lookup Tables.

---

#Third Rule

---

#**Never just store hashes!**

---

![](img/salt.jpg)

^Salt Those Passwords

^Demo Salt

^Who would do this?

---

![fit](img/Linkedin.png)

---

![fit](img/myspace.png)

---

![](img/tortoise.jpg)

^ Slowness

---

![](img/easyHammock.png)

^Easy Solution

---

#[fit]BCrypt


---

#BCrypt gives us
1. Good cryptographic hashing algorithm.
2. Automatically generated salts.
3. Control over the computational complexity.

---

![fit](img/bcrypt.png)

^The value you submit there is not just the number of rounds that the module will go through to hash your data. The module will use the value you enter and go through 2^rounds iterations of processing.

---

#BCrypt - How It Works

```javascript

bcrypt.hashSync(req.body.password,8)

```

returns 

```javascript

$2a$08$.jEA1FSMXOSGQhLXrKkN9.k9gyad8xN6r76YqOIzoA318fhoqUp7a

```

To Compare

```javascript

bcrypt.compareSync(myPlaintextPassword, hash);

```

^Version/Cost (SaltRounds)/Salt/Hash

---

# Objectives
- Explain Identification and Authentication.
- Explain why passwords are terrible.
- Explain what makes a good hashing algorithm.
- Store a password *securely* using BCrypt.

---

#Questions?


