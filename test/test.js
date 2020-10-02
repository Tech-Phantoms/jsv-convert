const {FileConverter} = require('../dist')
const path = require('path')

const fc = new FileConverter(path.join(__dirname, 'data.json'))


test('testing imports', () => {
    expect(fc).toBeDefined()
})
