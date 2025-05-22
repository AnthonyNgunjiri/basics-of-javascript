//another way of looping through an array is using forEach
// ['football','basketball','vaseball'].forEach(function(value,index) {

// if(value === 'basketball'){
//     return;//does the same thing as continue/skip a value
// }

//     console.log(index);
// console.log(value);
    
// });

//  let count = 0;

// let add = setInterval(function addNum() {
//     console.log(2 + 3); // Output: 5
//     count++;

//     if (count === 2) {
//         clearInterval(add); // Stop after running twice
//     }
// }, 2000);

 //filtering and mapping method

 //filtering,create a new array and pass the value
 [1,-3,5].filter((value,index)=>{

    if(value >= 0){
        return true;
    }else{
return false;
    }
 })

 //mapping ,creates a new array,add the value to the new array

 console.log(
 [1,1,3].map((value,index)=>{
return value + 10;//mapping transforms an array into another array based on the return value;
 }));

 //more shortcuts
  console.log([1,2,3].map(value=>value + 2));

  //a closure ,if a function have acess to a value , it will always have access to that value
  //note, funtions are values ,forEach,filter,map is an array method