import {JSONQuery} from "./index"
const data = {
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
    .select(['name', 'age', 'country'])
    .between("age", 25, 40)
    .orderBy("age", "asc")
    .get()
)


