var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

console.log(1111)
//greeting: 'Hi Sofia, what do you like the most about Java?'


function func(list) {

   return  list.map((item) => ({...item, greeting: `Hi ${item.firstName}, what do you like the most about ${item.language}?`}))
     
}

console.log(func(list1))
console.log(list1);


/*var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];


//greeting: 'Hi Sofia, what do you like the most about Java?'


function func(list){
   return  list.map((item)=>{
       {...list, greeting: 'Hi Sofia, what do you like the most about Java?'}
   })
    
}

func(list1) */