const {prepareTable} = require('../index')

test('Fake Test',()=>{
    expect(true).toBeTruthy()
})

test('table preparation',()=>{
    const param = [{name: "Souvik",age: 20},{name: "Shounak",age: 15},{code: "Java"}]
    const val = prepareTable(param)
    expect(val).toEqual([['name','age','code'],[['Souvik',20,''],['Shounak',15,''],['','','Java']]])
})