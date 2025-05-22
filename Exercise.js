// Multiply =(num1,num2)=>{
// const working = num1 * num2;
// console.log(working);

// }
// Multiply(2,3);

//question 2
//a function that count positive numbers in an array and return the total

//  countPositive=(nums=[])=>{
// let newArray = [];

// nums.forEach((value,index)=>{
// value = nums[index];

// if(value >= 0){
//     newArray += value;
// }
// })
// console.log(newArray.length);

// }
// countPositive([1,2,-3,5,-4,6]);
//incrementing an array using map

//  addNum=(oldArrray, num)=>{
//     let newArray = oldArrray.map(value =>{
//         return value + num;
       
//     });
//     console.log(newArray);
    
//  }
//  addNum([-2,-1,0,99],2);

 //remove strings with filter

 removeEgg = (foods)=>{
 let isEgg = false;
 let count = 0;
const answer = foods.filter((value)=>{
   if(value === 'egg' && count < 2){
     isEgg = true;
     count++;
     return false;
   }
   return true;  
})
console.log(answer);


 }
 removeEgg(['egg','royco','corriador','cuspicus', 'egg','egg'])
// //alternatively
// const removeEgg = (foods) => {
//   const answer = foods.filter((item) => item !== 'egg');
//   console.log(answer);
// };

// removeEgg(['egg', 'royco', 'corriador', 'cuspicus']);
