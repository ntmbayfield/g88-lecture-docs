#[fit]Authentication

# [fit]Part2: Storing Passwords

---

# Objectives
- Explain Identification and Authentication.
- Explain why passwords are terrible.
- Explain what makes a good hashing algorithm.

---

> Group Exercise

---

# [fit]Storing Passwords

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

#**Never just store simple hashes such as md5 sha256!**

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

Objectives

- Explain Identification and Authentication.
- Explain why passwords are terrible.
- Explain what makes a good hashing algorithm.

---

#Questions?


