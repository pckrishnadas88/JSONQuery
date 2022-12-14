var JSONQuery = /** @class */ (function () {
    function JSONQuery(data) {
        this.result = [];
        this.data = data;
    }
    JSONQuery.prototype.get = function () {
        return this.result;
    };
    JSONQuery.prototype.select = function () {
        var _this = this;
        var columns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            columns[_i] = arguments[_i];
        }
        if (columns.length == 1 && columns[0] == "*") {
            this.result = this.data;
            return this;
        }
        this.data;
        this.data.map(function (e) {
            for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                var column = columns_1[_i];
                _this.singleRow[column] = e[column];
            }
            _this.result.push(_this.singleRow);
        });
        return this;
    };
    return JSONQuery;
}());
var data = {
    people: [
        { name: 'Matt', country: 'NZ', age: 34 },
        { name: 'Pete', country: 'AU', age: 20 },
        { name: 'Mikey', country: 'NZ', age: 31 },
        { name: 'Kevin', country: 'AU', age: 40 },
        { name: 'Joseph', country: 'AU', age: 43 },
    ]
};
var qObj = new JSONQuery(data.people);
console.log(qObj
    //.select('name', 'country', 'pin', 'age')
    .select("*")
    // .where("age", "!=", 40)
    // //.where("name", "==", "Matt")
    // .orderBy("age", "desc")
    // .limit(4)
    .get());
