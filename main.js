// Q1.
let hello = () =>{
    return "hello world";
}
console.log(hello())

// Q2
let sum=(a,b) => {
    return(a+b)
}
console.log(sum(3,4))

// Q3
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

// Q4
var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

// Q5.
function factorial(n){
    let fact =1
    for(let i=n;i>=1;i--){
        fact*=i
}
return(fact)
}
console.log(factorial(5))