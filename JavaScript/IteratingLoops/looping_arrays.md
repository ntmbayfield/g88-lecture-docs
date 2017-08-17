# Iterating over an Array`

---

# Iterating an array
### When you don't need index numbers

```javascript
let arr = ["this", "is", "an", "array", "of", "strings"];
function iterateArray(arrOfWords){
  for(let word of arrOfWords){
    console.log(`the word is ${word}`);

  }
}

iterateArray(arr);
```

# Iterating an Array when you need index numbers

```javascript
let arr = ["this", "is", "an", "array", "of", "strings"];
function iterateArrayWithIndex(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(`the value at index ${i} is ${arr[i]}`);
  }
}

iterateArrayWithIndex(arr);
```
