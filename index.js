
var data = {
    people: [
      {name: 'Matt', country: 'NZ', pin:49493, age:34},
      {name: 'Pete', country: 'AU', age:20},
      {name: 'Mikey', country: 'NZ', age: 31},
      {name: 'Pete', country: 'AU', age:40},
      {name: 'Pete', country: 'AU', age:43},

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
                }
            }

         } )
        return this
    }
   
}

const qObj = new JSONQuery(data.people)
console.log(
    qObj
    .select('name', 'country', 'pin', 'age')
    .where("age", "<", 40)
    .where("name", "==", "Matt")
    .limit(3)
    .get())