enum ConditionsEnum {
    EqualTo = "==",
    LessThan = "<",
    GreaterThan = ">",
    lessThanOrEqual = "<=",
    GreaterThanOrEqual = ">=",
    NotEqual = "!="
}
export class JSONQuery<DataType> {
    data: DataType[]
    result: DataType[] = []
    constructor(data: DataType[]) {
      this.data = data 
    }
   
    get(): DataType[] {
        return this.result
    }
    select(columns: Array<keyof DataType>) {
        if(columns.length == 1 && columns[0] == "*") {
            this.result = this.data
            return this
        }
        this.data.map( e => {
            const singleRow:DataType = <DataType>{}
            for (const column of columns) {
                singleRow[column as keyof DataType] = e[column as keyof DataType]
            }
            this.result.push(<DataType>singleRow)
        })
        return this
    }
    limit(limit=10) {
        if(this.result.length >= limit) {
            this.result = this.result.slice(0, limit)
        }
        return this
    }
    where(column:  keyof DataType, condition: ConditionsEnum, value: any) {
        this.result = this.result.filter(e=> {
            if(condition == ConditionsEnum.EqualTo) {
                return e[column as keyof DataType] == value
            } else if(condition == ConditionsEnum.GreaterThan) {
                return e[column as keyof DataType] > value
            } else if(condition == ConditionsEnum.LessThan) {
                return e[column as keyof DataType] < value
            } else if(condition == ConditionsEnum.NotEqual) {
                return e[column as keyof DataType] != value
            } else if(condition == ConditionsEnum.GreaterThanOrEqual) {
                return e[column as keyof DataType] >= value
            } else if(condition == ConditionsEnum.lessThanOrEqual) {
                return e[column as keyof DataType] <= value
            }

         } )
        return this
    }
}

var data = {
    people: [
      {name: 'Matt', country: 'NZ', age:34},
      {name: 'Pete', country: 'AU', age:20},
      {name: 'Mikey', country: 'NZ', age: 31},
      {name: 'Kevin', country: 'AU', age:40},
      {name: 'Joseph', country: 'AU', age:43},

    ]
}

interface People {
    name: string;
    country: string;
    age: number;
}
const qObj = new JSONQuery<People>(data.people)
console.log(
    qObj
    .select(['name', 'age'])
    //.select({name:})
    .where("age", ConditionsEnum.NotEqual, 40)
    // //.where("name", "==", "Matt")
    // .orderBy("age", "desc")
    .limit(2)
    .get())