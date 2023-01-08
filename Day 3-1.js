let obj = [
    {person:"Name 1",age:"2",company:"guvi"},
    {person:"Name 2",age:"7",company:"guvi Geek"},
    {person:"Name 3",age:"10",company:"guvi Institute"}
];
//for loop
console.log("Using 'For' loop")
for(let i=0; i<obj.length; ++i)
{
   
    console.log(`
    Person:${obj[i].person}
    Age:${obj[i].age}
    Company:${obj[i].company}
    `);

}

//forEach loop
console.log("Using 'forEach' loop")
obj.forEach((data)=>{

   
   console.log(`
    Person:${data.person}
    Age:${data.age}
    Company:${data.company}
   `);
});

//for in loop
console.log("Using 'for in' loop")
for(i in obj){
   console.log(`
    Person:${obj[i].person}
    Age:${obj[i].age}
    Company:${obj[i].company}

   `)
}

//for of loop
console.log("Using 'for of' loop")
for(data of obj){
   console.log(`
    Person:${data.person}
    Age:${data.age}
    Company:${data.company}

   `)
}


















