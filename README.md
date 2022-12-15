# JSONQuery

A library for querying javascript objects

![npm](https://img.shields.io/npm/dw/@krishnadaspc/jsonquery) ![Version](https://img.shields.io/npm/v/@krishnadaspc/jsonquery) [![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)


# Installation

```bash
npm i @krishnadaspc/jsonquery
```

## overview of all available functions - check Examples of available functions section for examples

most methods can be chained and to get the final result call the ``get()`` method at the end.

Currently available methods

```ts
1. get()
2. select(columns: Array<keyof DataType> | ['*'])
3. limit(Number)
4. where(column: keyof DataType, condition: ComparisonOperator, value: any)
5. orderBy(column: keyof DataType, sort_order:SortOrder)
6. distinct(column: keyof DataType)
7. fetchOnly(column: keyof DataType) // This is not chainable as it returns a single column values as plain array
8. in(column: keyof DataType, values:Array<any>)
```

```js
import {JSONQuery} from "@krishnadaspc/JSONQuery"

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
    .select(['name', 'age', "country"])
    .where("age", ">", 30)
    .orderBy("age", "asc")
    .limit(5)
    .get()

```

# Examples of available functions

<details>
  <summary>select</summary>

```js
import {JSONQuery} from "@krishnadaspc/JSONQuery"

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
```

## 1. Selecting selected columns

```js
qObj
  .select(['name', 'age'])
  .get()
```
## 2. Selecting all columns
```js
qObj
  .select(['*'])
  .get()
```
</details>

<details>
  <summary>where(column, condition, value)</summary>

## 1. using single where condition 

```js
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
    .select(['name', 'age'])
    .where("age", ">", 30)
    .get()
)

/**output
[
  { name: 'Matt', age: 34 },
  { name: 'Mikey', age: 31 },
  { name: 'Kevin', age: 40 },
  { name: 'Joseph', age: 43 }
]
*/

```
## 2. using multiple where condition 

```js
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
    .select(['name', 'age', "country"])
    .where("age", ">", 30)
    .where("country", "==", "AU")
    .get()
)
/**output
[
  { name: 'Kevin', age: 40, country: 'AU' },
  { name: 'Joseph', age: 43, country: 'AU' }
]
*/

```

</details>

# Typescript Example fetching from live dummyjson api using axios

```js
import { JSONQuery } from "@krishnadaspc/JSONQuery"
import axios from "axios"

interface IProduct {
    id: Number,
    title: string,
    price: Number,
    rating: Number
}

axios.get('https://dummyjson.com/products')
    .then(response => {
        const qObj = new JSONQuery<IProduct>(response.data.products)
        const filteredProducts = qObj
            .select(['id', "title", 'price', "rating"])
            .where("price", ">", 100)
            .orderBy("rating", "desc")
            .limit(5)
            .get()
        console.log(filteredProducts)
    })
    .catch(error => {
        console.log(error);
    });


```
## Output of `filteredProducts` will be

```bash
[
  { id: 1, title: 'iPhone 9', price: 549, rating: 4.69 },
  { id: 6, title: 'MacBook Pro', price: 1749, rating: 4.57 },
  { id: 9, title: 'Infinix INBOOK', price: 1099, rating: 4.54 },
  { id: 2, title: 'iPhone X', price: 899, rating: 4.44 },
  {
    id: 8,
    title: 'Microsoft Surface Laptop 4',
    price: 1499,
    rating: 4.43
  }
]
```