type SortOrder = "asc" | "desc"
type ComparisonOperator = "==" | "<" | ">" | "<=" | ">=" | "!="
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
        if (columns.length == 1 && columns[0] == "*") {
            this.result = this.data
            return this
        }
        this.data.map(e => {
            const singleRow: DataType = <DataType>{}
            for (const column of columns) {
                singleRow[column as keyof DataType] = e[column as keyof DataType]
            }
            this.result.push(<DataType>singleRow)
        })
        return this
    }
    limit(limit = 10) {
        if (this.result.length >= limit) {
            this.result = this.result.slice(0, limit)
        }
        return this
    }
    where(column: keyof DataType, condition: ComparisonOperator, value: any) {
        this.result = this.result.filter(e => {
            if (condition == "==") {
                return e[column as keyof DataType] == value
            } else if (condition == ">") {
                return e[column as keyof DataType] > value
            } else if (condition == "<") {
                return e[column as keyof DataType] < value
            } else if (condition == "!=") {
                return e[column as keyof DataType] != value
            } else if (condition == ">=") {
                return e[column as keyof DataType] >= value
            } else if (condition == "<=") {
                return e[column as keyof DataType] <= value
            }

        })
        return this
    }
    orderBy(column: keyof DataType, sort_order:SortOrder) {
        if (sort_order.toLowerCase() == 'asc') {
            this.result = this.result.sort((a, b) => {
                const nameA = String(a[column as keyof DataType]).toLowerCase() // ignore upper and lowercase
                const nameB = String(b[column as keyof DataType]).toLowerCase() // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1
                }

                // names must be equal
                return 0;
            })
        } else if (sort_order.toLowerCase() == 'desc') {
            this.result = this.result.sort((a, b) => {
                const nameA = String(a[column as keyof DataType]).toLowerCase() // ignore upper and lowercase
                const nameB = String(b[column as keyof DataType]).toLowerCase() // ignore upper and lowercase
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
        .orderBy("age", "asc")
        .limit(4)
        .get())