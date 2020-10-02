const { FileConverter } = require('../dist')
const path = require('path')

const fc = new FileConverter(path.join(__dirname, 'data.json'))


test('testing imports', () => {
    expect(fc).toBeDefined()
})

test('testing final outputstring', () => {
    let csv_string = fc.generateCsvFormat()
    console.log(csv_string)

    expect(csv_string).toBeDefined()
})

test('testing column output', () => {
    let column_string = fc.generateColumns()
    console.log(column_string)

    expect(column_string[0]).toMatch("javascript,5")
})
