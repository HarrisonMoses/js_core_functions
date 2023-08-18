//Reduce Functiion
//iterates , callback function 
//reduces to a single valeu - number ,array , abject
//first parameter {"acc"} - final acculation
//second parameter {'curr'} - current iteration

//arrays
const number = [2,4,5,6,7]
const average = number.reduce((acc,curr)=>{return acc+=curr},0)/number.length
console.log(average);
//Objects
const people=[
  {name:'Harrison',Age: 34,job:'Developer'},
  {name:'Johnson',Age: 45,job:'Baber'},
  {name:'Harrison',Age: 12,job:'Doctor'}
]

const total = people.reduce((acc,curr )=>{
  acc += curr.Age
  return acc
},0);
console.log(total);

//Reduce with object passing
const toto = people.reduce((acc,curr)=>{
  acc.Name = curr.name
  acc.job = curr.job
  return acc

},{Name:'',job:''});
console.log(toto)