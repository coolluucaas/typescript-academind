// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
const person={
    name: 'lucas',
    age: 35,
    hobbies: ['sport', 'cooking'],
    role:[2, 'author']
}

let favoriteActivities: string[];
favoriteActivities = ['kungfu']

console.log(person.name)

for(const hobby of person.hobbies){
    console.log(hobby)
}




