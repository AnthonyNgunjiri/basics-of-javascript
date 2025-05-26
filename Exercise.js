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

//  removeEgg = (foods)=>{
//  let isEgg = false;
//  let count = 0;
// const answer = foods.filter((value)=>{
//    if(value === 'egg' && count < 2){
//      isEgg = true;
//      count++;
//      return false;
//    }
//    return true;  
// })
// console.log(answer);


//  }
//  removeEgg(['egg','royco','corriador','cuspicus', 'egg','egg'])
// // //alternatively
// const removeEgg = (foods) => {
//   const answer = foods.filter((item) => item !== 'egg');
//   console.log(answer);
// };

// removeEgg(['egg', 'royco', 'corriador', 'cuspicus']);
// Turn this into a new array where all items are uppercase
// let items = ["bread", "milk", "egg"];
//  let newItems = items.map(value=> value.toUpperCase());
//  console.log(newItems);
//  // Return the sum of only the even numbers in this array
//  let sum = 0;
//  nums = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < nums.length; i++) {
//   let element = nums[i];
//   if( element % 2===0 ){
//     sum += element;
//    // sum.push(element);
//   }
  
// }
// console.log(sum);
// // Given an array of numbers, return a new array with only the square of odd numbers
// let squared = [];
// let oldArrray = (numbers = [1, 2, 3, 4, 5]) =>{
// let squaredNumbers = numbers.filter(nums=>nums % 2 !== 0).map(acc=>acc*acc);
// console.log(squaredNumbers);
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];

//   if(element % 2 !== 0 ){
// squared.push(element * element);
// console.log(squared);

 // }
  
// }
// }
// oldArrray();

//filter,square and sum
const numbers = [1, 2, 3, 4, 5, 6, 7];
//filter odd numbers
// const oddNumbers = numbers
// .filter(nums =>nums % 2 !==0)
// .map(num => num * num)
// .reduce((acc,val)=>acc + val);
//  console.log(oddNumbers);

//  const multiply = (a, b) => {
//   const product = a * b;
//   console.log(product);
  
// };
// multiply(2,3);
 //first quiz
// const user ={
// name:'kelly hudson',
// email:'kel@gmail.com',
// isloggedIn:'kelly is logged in '
// };
// console.log(

// user.email
// );
// //2nd quiz
//  const items = [product1={
//   name:'Gucci',
//   category:'clothings',
//   price: '$'+ 250
//  },
//  product2={
//   name:'canned meat',
//   category:'food',
//   price: '$'+ 50
//  },
//  product3={
//   name:'toaster',
//   category:'electronic',
//   price: '$'+ 2500
//  }
// ]
// .map((items)=>{
// console.log(
//   `The product name is ${items.name} and their price ${items.price} `
// );

// })

// const items = [
//   {
//     name: 'Gucci',
//     category: 'clothings',
//     price: '$' + 250
//   },
//   {
//     name: 'canned meat',
//     category: 'food',
//     price: '$' + 50
//   },
//   {
//     name: 'toaster',
//     category: 'electronic',
//     price: '$' + 2500
//   }
// ];

// // 1. Add a new product
// items.push({
//   name: 'mattress',
//   category: 'beddings',
//   price: '$' + 3000
// });

// // 2. Update price of toaster
// items.forEach(product => {
//   if (product.name === 'toaster') {
//     product.price = '$' + 3000;
//   }
// });

// // 3. Remove Gucci item
// const updatedItems = items.filter(
//   product =>
//     !(product.name === 'Gucci' && product.category === 'clothings' && product.price === '$250')
// );

// // 4. Log the result
// console.log(updatedItems);
let products = [
  { id: 1, name: "Laptop", category: "electronics", price: 1000 },
  { id: 2, name: "T-shirt", category: "clothing", price: 30 },
  { id: 3, name: "Bread", category: "food", price: 2 }
];

// Add a product
function addProduct(product) {
  products.push(product);
}

// Update product by ID
function updateProduct(id, updatedProduct) {
  products = products.map(p => p.id === id ? { ...p, ...updatedProduct } : p);
}

// Delete product by ID
function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
}

// List products
function listProducts() {
  console.log("Product List:");
  products.forEach(p =>
    console.log(`${p.id}: ${p.name} - ${p.category} - $${p.price}`)
  );
}
addProduct({ id: 4, name: "Shoes", category: "clothing", price: 60 });
updateProduct(2, { price: 35 });
deleteProduct(1);
listProducts();

