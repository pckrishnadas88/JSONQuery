# JSONQuery

A library for querying javascript objects

![npm](https://img.shields.io/npm/dw/@krishnadaspc/jsonquery) ![Version](https://img.shields.io/npm/v/@krishnadaspc/jsonquery)


# Installation

```bash
npm i @krishnadaspc/jsonquery
```

# Example usage

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
  .select(['name', 'age'])
  .where("age", "!=", 40)
  .orderBy("age", "asc")
  .limit(4)
  .get()

```
will output 

```bash
[
  { name: 'Pete', age: 20 },
  { name: 'Mikey', age: 31 },
  { name: 'Matt', age: 34 },
  { name: 'Joseph', age: 43 }
]
```
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