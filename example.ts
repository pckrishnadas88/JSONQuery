import {JSONQuery} from "./JSONQuery"
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
console.log(
    qObj
        .select(['name', 'age'])
        .where("age", "!=", 40)
        // //.where("name", "==", "Matt")
        .orderBy("age", "desc")
        .limit(4)
        .get()) 