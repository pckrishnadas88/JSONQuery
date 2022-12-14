"use strict";
exports.__esModule = true;
exports.JSONQuery = void 0;
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
            if (condition == "==") {
                return e[column] == value;
            }
            else if (condition == ">") {
                return e[column] > value;
            }
            else if (condition == "<") {
                return e[column] < value;
            }
            else if (condition == "!=") {
                return e[column] != value;
            }
            else if (condition == ">=") {
                return e[column] >= value;
            }
            else if (condition == "<=") {
                return e[column] <= value;
            }
        });
        return this;
    };
    JSONQuery.prototype.orderBy = function (column, sort_order) {
        if (sort_order.toLowerCase() == 'asc') {
            this.result = this.result.sort(function (a, b) {
                var nameA = String(a[column]).toLowerCase(); // ignore upper and lowercase
                var nameB = String(b[column]).toLowerCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
        }
        else if (sort_order.toLowerCase() == 'desc') {
            this.result = this.result.sort(function (a, b) {
                var nameA = String(a[column]).toLowerCase(); // ignore upper and lowercase
                var nameB = String(b[column]).toLowerCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                // names must be equal
                return 0;
            });
        }
        return this;
    };
    return JSONQuery;
}());
exports.JSONQuery = JSONQuery;
module.exports = {
    JSONQuery: JSONQuery
};
