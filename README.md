# JSONQuery

A library for querying javascript objects

# Example usage

```js
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

qObj
  .select(['name', 'age'])
  .where("age", "!=", 40)
  .orderBy("age", "asc")
  .limit(4)
  .get()

```
will output 

```sh
[
  { name: 'Joseph', country: 'AU', pin: null, age: 43 },
  { name: 'Matt', country: 'NZ', pin: 49493, age: 34 },
  { name: 'Mikey', country: 'NZ', pin: null, age: 31 },
  { name: 'Pete', country: 'AU', pin: null, age: 20 }
]
```