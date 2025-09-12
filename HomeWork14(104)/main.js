// const user = {
//     name: 'Vladislav',
//     age: 20,
//     city: 'Novosibirsk',
//     isStudent: true,
//     sayHello(name) {
//       console.log(`Hello ${name}`)
//     }
// }

// console.log(user.sayHello('name'))

const users = [
    {
        name: 'Vlad',
        age: 20,
        isAdmin: true
    },
    {
        name: 'Gleb',
        age: 25,
        isAdmin: true
    },
    {
        name: 'Jack',
        age: 15,
        isAdmin: false
    },
    {
        name: 'Alex',
        age: 10,
        isAdmin: false
    },
    {
        name: 'Sakamoto',
        age: 27,
        isAdmin: false
    },
    {
        name: 'Akashi',
        age: 16,
        isAdmin: true
    },
]

let simpleUsers = 0;

for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin !== true ) {
    simpleUsers++; 
  }
}

console.log('Колличество простых пользователей:',simpleUsers);