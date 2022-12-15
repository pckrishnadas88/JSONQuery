import {JSONQuery} from "./index"
var data = {
    people: [
        { name: 'Matt', country: 'NZ', age: 34 },
        { name: 'Pete', country: 'AU', age: 20 },
        { name: 'Mikey', country: 'NZ', age: 31 },
        { name: 'Kevin', country: 'AU', age: 40 },
        { name: 'Joseph', country: 'AU', age: 43 },

    ]
}

const qObj = new JSONQuery(data.people)
// console.log(
//     qObj
//         //.select(['name', 'age'])
//         .distinct("country")
//         .fetchOnly("country")
// )


var ageArray = 
    [
        {"name":"Joe", "age":17}, 
        {"name":"Bob", "age":17}, 
        {"name":"Carl", "age": 35}
    ]

const ageArrayObj = new JSONQuery(ageArray)

console.log(ageArrayObj.distinct("age").get()) // outputs: [ { name: 'Bob', age: 17 }, { name: 'Carl', age: 35 } ]
console.log(ageArrayObj.distinct("age").fetchOnly("age")) // outputs: [ 17, 35 ]