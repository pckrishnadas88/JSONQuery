/*
var data = {
    people: [
      {name: 'Matt', country: 'NZ', pin:49493, age:34},
      {name: 'Pete', country: 'AU', age:20},
      {name: 'Mikey', country: 'NZ', age: 31},
      {name: 'Kevin', country: 'AU', age:40},
      {name: 'Joseph', country: 'AU', age:43},

    ]
  }
  
class JSONQuery {
    constructor(data) {
        this.data = data 
        this.result = []
    }
    get() {
        return this.result
    }
    select(...columns) {
        if(columns == "*") {
            this.result = this.data
            return this
        }
        this.data.map(e=> {
            const singleItem = {}
            for (const column of columns) {
                if(Reflect.has(e, column)) {
                    singleItem[column] = e[column]
                } else {
                    singleItem[column] = null
                }
            }
            this.result.push(singleItem)
        })
        return this
    }
    limit(limit=10) {
        if(this.result.length >= limit) {
            this.result = this.result.slice(0, limit)
        }
        return this
    }
    where(column, condition, value) {

        this.result = this.result.filter(e=> {
            if(Reflect.has(e, column)) {
                if(condition == '>') {
                    return e[column] > value
                } else if(condition == '==') {
                    return e[column] == value
                } else if(condition == '<') {
                    return e[column] < value
                } else if(condition == '!=') {
                    return e[column] != value
                }
            }

         } )
        return this
    }
    orderBy(column, sort_order) {
            if(sort_order.toLowerCase() == 'asc') {
                this.result = this.result.sort((a, b) => {
                    const nameA = a[column].toString().toLowerCase(); // ignore upper and lowercase
                    const nameB = b[column].toString().toLowerCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                    return -1;
                    }
                    if (nameA > nameB) {
                    return 1;
                    }
                
                    // names must be equal
                    return 0;
                })
            } else if(sort_order.toLowerCase() == 'desc') {
                this.result = this.result.sort((a, b) => {
                    const nameA = a[column].toString().toLowerCase(); // ignore upper and lowercase
                    const nameB = b[column].toString().toLowerCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                
                    // names must be equal
                    return 0;
                })
            }
        return this
        
        
    }
   
}

const qObj = new JSONQuery(data.people)
console.log(
    qObj
    //.select('name', 'country', 'pin', 'age')
    .select("*")
    .where("age", "!=", 40)
    //.where("name", "==", "Matt")
    .orderBy("age", "desc")
    .limit(4)
    .get())
    */