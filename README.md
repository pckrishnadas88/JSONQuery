# JSONQuery

A library for querying javascript objects in ORM manner supporting deep nested objects.

![npm](https://img.shields.io/npm/dw/@krishnadaspc/jsonquery) ![Version](https://img.shields.io/npm/v/@krishnadaspc/jsonquery) [![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)


# Installation

```bash
npm i @krishnadaspc/jsonquery
```

## overview of all available functions

most methods can be chained and to get the final result call the ``get()`` method at the end.

### Currently available methods


- *get()*
- *select(columns: Array<keyof DataType> | ['*'])*
- *limit(limit: Number=0, offset: Number=0)*
- *where(column: keyof DataType, condition: "==" | "<" | ">" | "<=" | ">=" | "!=", value: any)*
- *orderBy(column: keyof DataType, sortOrder: "asc" | "desc")*
- *distinct(column: keyof DataType)*
- *fetchOnly(column: keyof DataType)*  This is not chainable as it returns a single column values as plain array
- *in(column: keyof DataType, values:Array<any>)*
- *notIn(column: keyof DataType, values:Array<any>)*
- *between(column: keyof DataType, startValue: any, endValue: any)*
- *nestedWhere(column: string, condition: ComparisonOperator, value: any)*
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

<details>
  <summary>nestedWhere(column, condition, value)</summary>

# Querying deep nested objects

```js
const people = [
    {
        "fullName": "Bessie Smith",
        "address": {
            "street": "27640 Glen Burgs",
            "city": "Brades"
        },
        "email": "Bessie_Smith@yahoo.com",
        "phone": {
            "home": "600-933-0626",
            "office": "774-586-4275"
        },
        "jobInfo": {
            "basic": 10384,
            "department": "Kids"
        }
    },
    {
        "fullName": "Maria Russel",
        "address": {
            "street": "8217 Krajcik Throughway",
            "city": "Lospalos"
        },
        "email": "Maria_Russel93@hotmail.com",
        "phone": {
            "home": "212-868-6900",
            "office": "061-060-8362"
        },
        "jobInfo": {
            "basic": 2385,
            "department": "Beauty"
        }
    },
    {
        "fullName": "Jonathan Koss",
        "address": {
            "street": "52449 Elinore Oval",
            "city": "Becicherecu Mic"
        },
        "email": "Jonathan_Koss@hotmail.com",
        "phone": {
            "home": "595-125-5573",
            "office": "361-043-8944"
        },
        "jobInfo": {
            "basic": 3423,
            "department": "Sports"
        }
    },
    {
        "fullName": "Ivan McDermott",
        "address": {
            "street": "632 Gabriella Corners",
            "city": "Bajadero"
        },
        "email": "Ivan8@hotmail.com",
        "phone": {
            "home": "474-381-5468",
            "office": "113-620-8681"
        },
        "jobInfo": {
            "basic": 2329,
            "department": "Sports"
        }
    },
    {
        "fullName": "Wilbert Schmitt",
        "address": {
            "street": "7524 Eliezer Village",
            "city": "Hongseong"
        },
        "email": "Wilbert.Schmitt51@hotmail.com",
        "phone": {
            "home": "239-644-0940",
            "office": "826-517-5449"
        },
        "jobInfo": {
            "basic": 21204,
            "department": "Kids"
        }
    },
    {
        "fullName": "Teri Schamberger",
        "address": {
            "street": "72716 Marquise Falls",
            "city": "Cruz Bay"
        },
        "email": "Teri_Schamberger58@gmail.com",
        "phone": {
            "home": "477-684-6061",
            "office": "547-193-1703"
        },
        "jobInfo": {
            "basic": 1146,
            "department": "Garden"
        }
    },
    {
        "fullName": "Catherine Watsica",
        "address": {
            "street": "42987 Greenholt Neck",
            "city": "Barber"
        },
        "email": "Catherine30@yahoo.com",
        "phone": {
            "home": "318-025-1780",
            "office": "799-976-0109"
        },
        "jobInfo": {
            "basic": 10103,
            "department": "Automotive"
        }
    },
    {
        "fullName": "Leslie Schmitt",
        "address": {
            "street": "82783 Leannon Hills",
            "city": "Burao"
        },
        "email": "Leslie.Schmitt1@yahoo.com",
        "phone": {
            "home": "570-107-6840",
            "office": "363-354-5809"
        },
        "jobInfo": {
            "basic": 3753,
            "department": "Toys"
        }
    }
]
const qObj = new JSONQuery(people)
console.dir(
    qObj
    .select(['fullName', 'address', 'email', 'phone', 'jobInfo'])
    .nestedWhere("jobInfo.department", "==", "Sports")
    .orderBy("fullName", "desc")
    .get()
)
/** output
 [
  {
    fullName: 'Jonathan Koss',
    address: { street: '52449 Elinore Oval', city: 'Becicherecu Mic' },
    email: 'Jonathan_Koss@hotmail.com',
    phone: { home: '595-125-5573', office: '361-043-8944' },
    jobInfo: { basic: 3423, department: 'Sports' }
  },
  {
    fullName: 'Ivan McDermott',
    address: { street: '632 Gabriella Corners', city: 'Bajadero' },
    email: 'Ivan8@hotmail.com',
    phone: { home: '474-381-5468', office: '113-620-8681' },
    jobInfo: { basic: 2329, department: 'Sports' }
  }
]
 */
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