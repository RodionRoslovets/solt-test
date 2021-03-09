let names = ['John', 'Sam', 'Leonard', 'William', 'Sara', 'July', 'Zack', 'Emy', 'Peter', 'Jane'],
    surnames = ['Smith', 'Brown', 'Wesson', 'Colt', 'Torvalds', 'Gibs', 'Mosby', 'Stark', 'Lynch', 'Hetfield']

let people = []

function getRandom (){
    return Math.round(Math.random() * 9)
}

for(let i = 0; i < 100; i++){
    let newObj = {
        name:names[getRandom()],
        surname:surnames[getRandom()],
        id:i
    }

    people.push(newObj)
}

export default people