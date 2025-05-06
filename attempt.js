// const pi = 24;
// var myName= 'Anthony';

// myBrethren= `am Ngunjiri  ${myName} , a software engineer and a ${pi} hrs developer, lets go techie ,shall we?`
// console.log(myBrethren);
 
//Working with operation structures
//  let hours ='';
// const Name = 'Tonie parker';
//   if(hours ? 6 : 12){
//     console.log(`good morning ${Name} `)
//   }else if(hours ? 13 : 17){
//     console.log(`good afternoon ${Name} `)

//   }else{
//     console.log(`good night ${Name} `)

//   }


//objects

const product = {
  name: 'socks',
  price:150
};
console.log(product);
console.log(product.name);

//modify objects
product.price = 120;

console.log(product.price);

//storing in localstorage

//setting items
localStorage.setItem('message','hello')

//acessing the item stored
 console.log(localStorage.getItem('message'));

 //save the item as string in localstorage
 localStorage.setItem('score',JSON.stringify(score))

 //converting into object

 console.log(JSON.parse(localStorage.getItem('score')));
 
 // remove item from local storage
   localStorage.removeItem('score')|| {
    wins:0,
    lossess:0,
    ties:0
   };

  //   if(!score){
  //     score = {wins:0,
  //       losses:0,
  //       ties :0
  //     };
  //  }

  //Auto-boxing in javascript
   //DOES NOT WORK WITH NULL AND UNDEFINED
 
console.log('hi'.length);
console.log('hi'.toUpperCase);

const object1 = {
  message : 'hi'
};

//copy by reference
const object2 = object1;

object1.message = 'good work';
console.log(object1);
//we can't compare object directly

const object3 = {
  message:'good work'
};
//objects only compare references not values
console.log(object3 === object1);//false
console.log(object2 === object1);//true
  const obbject4 ={
    message: 'good work',
    price: 100
  };
 // const message = obbject4;

  //can destructure if the property value is the same
 const {message,price} = obbject4;
 console.log(message);
 console.log(price); 

 //shorthand method
 const object5 = {
  //message :message
  message,
  
   method()
{
  console.log('method');
  
}  
   //create the same object as above
 };
 console.log(object5);
 object5.method();
 
 
 

 