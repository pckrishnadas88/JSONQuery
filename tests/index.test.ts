import { JSONQuery } from "../index"
var data = {
  people: [
    { name: 'Matt', country: 'NZ', age: 35 },
    { name: 'Pete', country: 'AU', age: 20 },
    { name: 'Mikey', country: 'NZ', age: 31 },
    { name: 'Kevin', country: 'AU', age: 40 },
    { name: 'Joseph', country: 'AU', age: 43 },
    { name: 'Kiran', country: 'IN', age: 43 },

  ]
}

test('select all from data length to be 5', () => {
  const qObj = new JSONQuery(data.people)
  
  const testData =  qObj
      .select(['name', 'age', 'country'])
      .get()
  expect(testData.length).toBe(6);
});

test('testing where with single item', () => {
  const qObj = new JSONQuery(data.people)
  
  const testData =  qObj
      .select(['name', 'age', 'country'])
      .where("age", "==", 20)
      .get()
  expect(testData[0]['name']).toBe('Pete');
});

test('select all columns with *', () => {
  const qObj = new JSONQuery(data.people)
  
  const testData =  qObj
      .select(['*'])
      .limit(1)
      .get()
      expect(testData).toEqual([{ name: 'Matt', country: 'NZ', age: 35 }]);
});

test('testing where < operator by age', () => {
  const qObj = new JSONQuery(data.people)
  
  const testData =  qObj
      .select(['name', 'age', 'country'])
      .where("age", "<", 35)
      .get()
  expect(testData.length).toBe(2);
});
test('testing where > operator by age', () => {
  const qObj = new JSONQuery(data.people)
  
  const testData =  qObj
      .select(['name', 'age', 'country'])
      .where("age", ">", 35)
      .get()
  expect(testData.length).toBe(3);
});
test('testing where <= operator by age', () => {
  const qObj = new JSONQuery(data.people)
  
  const testData =  qObj
      .select(['name', 'age', 'country'])
      .where("age", "<=", 35)
      .get()
  expect(testData.length).toBe(3);
});
test('testing where >= operator by age', () => {
  const qObj = new JSONQuery(data.people)
  
  const testData =  qObj
      .select(['name', 'age', 'country'])
      .where("age", ">=", 42)
      .get()
  expect(testData.length).toBe(2);
});
test('testing where != operator by age', () => {
  const qObj = new JSONQuery(data.people)
  
  const testData =  qObj
      .select(['name', 'age', 'country'])
      .where("age", "!=", 20)
      .get()
  expect(testData.length).toBe(5);
});
test('testing order by age asc', () => {
  const qObj = new JSONQuery(data.people)
  
  const testData =  qObj
      .select(['name', 'age', 'country'])
      .orderBy("age", "asc")
      .limit(1)
      .get()
  expect(testData[0].age).toBe(20);
});
test('testing order by age desc', () => {
  const qObj = new JSONQuery(data.people)
  
  const testData =  qObj
      .select(['name', 'age', 'country'])
      .orderBy("age", "desc")
      .limit(1)
      .get()
  expect(testData[0].age).toBe(43);
});