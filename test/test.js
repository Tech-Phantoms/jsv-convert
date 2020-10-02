const { FileConverter } = require('../dist')
const path = require('path')

const fc = new FileConverter(path.join(__dirname, 'data.json'))


test('testing imports', () => {
    expect(fc).toBeDefined()
})

test('testing final outputstring', () => {
    let csv_string = fc.generateCsvFormat()
    console.log(csv_string)

    expect(csv_string).toMatch(`langauge,rating,\njavascript,5,\njava,5,`)
})
