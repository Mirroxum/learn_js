// function factorial(n) {
//     if (n <= 1) {
//         return 1
//     }
//     return n * factorial(n-1)
// }

// const arr = [1,true,6, '6', '22', 'sa']
// const dictus = {
//     sum: 3,
//     rum: 'non'
// }

// const myName = () => {
//     console.log('hi');
// }

// console.log(arr.map((el) => el*2))

// const value = 11

// value
//     ? console.log('Истина')
//     : console.log('Ложь')

// for(let i = 0; i<8; i++) {
//     console.log(arr[i])
// }

// arr.forEach((element, index) => {
//     console.log(element,index)
// })

// Object.keys(dictus).forEach((element) => {
//     console.log(element);
// })

// for (items, value in dictus) {
//     console.log(items)
//     console.log(value)
// }

// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     } 

//     upvote() {
//         this.votesQty += 1
//     }
// }

// const firstObj = new Comment('first comment')

// const myPromise = new Promise((resolve, reject) => {

// });

// // код ниже работает только в браузере
// fetch('https://api.thedogapi.com/v1/images/search')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.error(error))

// const getData = (url) =>
//     new Promise((resolve, reject) =>
//         fetch(url)
//             .then(response => response.json())
//             .then(json => resolve(json))
//             .catch(error => reject(error))    
//         )

// getData('https://api.thedogapi.com/v1/images/search')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))


// const timerPromise = () =>
//     new Promise((resolve, reject) =>
//         setTimeout(() => resolve(), 2000)
//         )
    
// const asyncFn = async () => {
//     console.log('Timer start')
//     const startTime = performance.now()
//     await timerPromise()
//     const endTime = performance.now()
//     console.log(`Timer end ${endTime-startTime}`)
// }

// asyncFn()

const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

getData('https://api.thedogapi.com/v1/images/search')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

const url = 'https://api.thedogapi.com/v1/images/search'

try {
    const data = await getData(url);
    console.log(data)
} catch (error) {
    console.log(error.message)
}
