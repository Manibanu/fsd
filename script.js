let obj1={
    name:"sachin",
    age: 30
}
let obj2=obj1
obj2.name="sachin tendulkar";
console.log(obj1.name) //sachin tendulkar
//In the above code, obj1 and obj2 are referencing the same object in memory. When we change the name property of obj2, it also changes the name property of obj1 because they both point to the same object.

//To create a new object that is a copy of obj1, we can use the spread operator or 
// Object.assign() method. For example:         
//Using spread operator

//falsey values in JavaScript include:
//1. false
//2. 0 (zero)
if("banu"){ //if condition will be pass the value "banu" because it is a truthy value.
//  without any condition it will print false because empty string is falsy value
    console.log('true')
}
else{
    console.log('false');   //excute this block because empty string is falsy value
}

console.log(5+'5') //automaic conversion concatenation
console.log(5-'5'); //numeric conversion
console.log(5=='5'); //true check the value
console.log(5==='5'); //false check the datatype

// array diff
let arr=[1,'new',2,'3']
console.log(arr);