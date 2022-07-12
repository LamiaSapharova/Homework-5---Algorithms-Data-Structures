
var isAnagram = function(s, t) {
    let map = Array(26);
    let index = 0;
    let base = 'a'.charCodeAt(0);

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
      index = s[i].charCodeAt(0) - base;
      if (!map[index]) map[index] = 0;
      map[index]++;
    }

    for (let j = 0; j < t.length; j++) {
      index = t[j].charCodeAt(0) - base;
      if (!map[index]) return false;
      map[index]--;
    }
    return true;
};

var containsDuplicate = function(nums) {
   for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i]===nums[j]){
        return true;
      }
    }
   } 
   return false;
};

var maximumProduct = function(nums) {
    let product = [];
    for (let i = 0 ; i < nums.length;i++){
        for (let j = 0 ; j < nums.length;j++){
            if (j != i){
                for (let k = 0 ; k < nums.length;k++){
                    if (k != i && k != j){
                        let total = nums[i]*nums[j]*nums[k];
                        product.push(total);
                    }
                }
            }
        }
    }
    return Math.max(...product);
};

var guessNumber = function (n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    let m = Math.floor((left + right) / 2)
    if (guess(m) == -1) {
      right = m - 1;
    } 
    else if (guess(m) == 1) {
      left = m + 1;
    }
    else {
      return m;
    }
  } 
};

var searchRange = function (nums, target) {
    return [first(nums, target), last(nums, target)];
};
const first = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let firstIndex = -1;
    while (left <= right) {
        let m = left + parseInt((right - left) / 2);
        if (nums[m] === target) {
            firstIndex = m;
            right = m - 1;
        }
        else if (target < nums[m]) {
            right = m - 1;
        }
        else {
            left = m + 1;
        }
    }
    return firstIndex;
};

const last = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let lastIndex = -1;
    while (left <= right) {
        let m = left + parseInt((right - left) / 2);
        if (nums[m] === target) {
            lastIndex = m;
            left = m + 1;
        }
        else if (target < nums[m]) {
            right = m - 1;
        }
        else {
            left = m + 1;
        }
    }
    return lastIndex;
};

var mySqrt = function(x) {
  let y=Math.floor(Math.sqrt(x));
  return y;  
};

var isValid = function (s) {
    const characters = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            characters.push(s[i]);
        }
        else if (s[i] === ')' && characters[characters.length - 1] === '(' && characters.length !== 0 ) {
            characters.pop();
        } else if (s[i] === '}' && characters[characters.length - 1] === '{' && characters.length !== 0 ) {
            characters.pop();
        } else if (s[i] === ']' && characters[characters.length - 1] === '[' && characters.length !== 0 ) {
            characters.pop();
        }
        else {
            return false;
        }
    }
    return characters.length === 0;
};

var backspaceCompare = function(s, t) {
  const backspaceF = (input)=>{
    let newString = [];
    for(let char of input){
      if(char==='#'){
        newString.pop();
      }
      else{
        newString.push(char);
      }
    }
    return newString.join();
  }   
  if(backspaceF(s)===backspaceF(t)){
    return true;
  }
  else{
    return false;
  }
};

var evalRPN = function(tokens) {
  let   stack=[];
  const operator={
    '+':(number1,number2)=>number1+number2,
    '-':(number1,number2)=>number1-number2,
    '*':(number1,number2)=>number1*number2,
    '/':(number1,number2)=>Math.floor(number1/number2)
  }
  for(let token of tokens){
    if(operator[token]){
      let number2=stack.pop();
      let number1=stack.pop();
      stack.push(operator[token](number1,number2))
    }
    else{
      stack.push(parseInt(token));
    }
  }
  return stack.pop();
};

var invertTree = function(root) {
  function invertF(node){
    if(!node){
      return
    }
    let temp =node.left;
    node.left=node.right;
    node.right=temp;

    invertF(node.left);
    invertF(node.right);
  }
    invertF(root);
    return root;
};

var isSymmetric = function(root) {
        if (!root) return true;
  return mirror(root.left, root.right);
};

var mirror = function (x, y) {
  if ((!x && y) || (x && !y) || (x && y && x.val !== y.val)) return false;
  if (x && y) return mirror(x.left, y.right) && mirror(x.right, y.left);
  return true;
};

