/**Map method: 
  This simply returns an array fo an object 
  It does not do any modifications(size,values) on the original but 
  simply iterates over it to retun a new array 
 * Quokka Extension
 * 
 */
const people=[
  {
    name:'Harrison',
    Age: 34,
    job:'Developer'

  },
  {
    name:'Johnson',
    Age: 45,
    job:'Baber'

  },
  {
    name:'Harrison',
    Age: 12,
    job:'Doctor'

  }
]
const ages = people.map((person)=>{ return person.Age*2})// returns array of all ages (X2)

const myName =(person)=>(person.name);
const names = people.map(myName);

console.log(names)
console.log(ages ) 

const jobs = people.map((person)=>`<h2>${person.job}<h2/>`)
const result = document.querySelector('.result')
result.innerHTML =  jobs.joins('')