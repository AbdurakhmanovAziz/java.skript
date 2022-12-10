let studentWepro = {
    name: 'Aziz', 
    surname: 'Abdurakhmanov',
    age: 15,
    height: 168, 
    with: 62,
    gender: 'male',
}

let data = {
    year: 2007,
    number: 02,
    month: 02
}

let newAssigned = Object.assign({}, studentWepro, data)
console.log(newAssigned);

let arr = Object.keys(data)
console.log(data);  

let obj = Object.keys(studentWepro)
console.log(obj);