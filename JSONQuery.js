"use strict";
exports.__esModule = true;
exports.JSONQuery = void 0;
var ConditionsEnum;
(function (ConditionsEnum) {
    ConditionsEnum["EqualTo"] = "==";
    ConditionsEnum["LessThan"] = "<";
    ConditionsEnum["GreaterThan"] = ">";
    ConditionsEnum["lessThanOrEqual"] = "<=";
    ConditionsEnum["GreaterThanOrEqual"] = ">=";
    ConditionsEnum["NotEqual"] = "!=";
})(ConditionsEnum || (ConditionsEnum = {}));
var JSONQuery = /** @class */ (function () {
    function JSONQuery(data) {
        this.result = [];
        this.data = data;
    }
    JSONQuery.prototype.get = function () {
        return this.result;
    };
    JSONQuery.prototype.select = function (columns) {
        var _this = this;
        if (columns.length == 1 && columns[0] == "*") {
            this.result = this.data;
            return this;
        }
        this.data.map(function (e) {
            var singleRow = {};
            for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                var column = columns_1[_i];
                singleRow[column] = e[column];
            }
            _this.result.push(singleRow);
        });
        return this;
    };
    JSONQuery.prototype.limit = function (limit) {
        if (limit === void 0) { limit = 10; }
        if (this.result.length >= limit) {
            this.result = this.result.slice(0, limit);
        }
        return this;
    };
    JSONQuery.prototype.where = function (column, condition, value) {
        this.result = this.result.filter(function (e) {
            if (condition == ConditionsEnum.EqualTo) {
                return e[column] == value;
            }
            else if (condition == ConditionsEnum.GreaterThan) {
                return e[column] > value;
            }
            else if (condition == ConditionsEnum.LessThan) {
                return e[column] < value;
            }
            else if (condition == ConditionsEnum.NotEqual) {
                return e[column] != value;
            }
            else if (condition == ConditionsEnum.GreaterThanOrEqual) {
                return e[column] >= value;
            }
            else if (condition == ConditionsEnum.lessThanOrEqual) {
                return e[column] <= value;
            }
        });
        return this;
    };
    return JSONQuery;
}());
exports.JSONQuery = JSONQuery;
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
    .select(['name', 'age'])
    //.select({name:})
    .where("age", ConditionsEnum.NotEqual, 40)
    // //.where("name", "==", "Matt")
    // .orderBy("age", "desc")
    .limit(2)
    .get());
