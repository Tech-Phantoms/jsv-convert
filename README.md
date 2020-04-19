# jsv-convert

![Node.js CI](https://github.com/Ninja-Developers/jsv-convert/workflows/Node.js%20CI/badge.svg?branch=master)
![npm](https://img.shields.io/npm/v/jsv-convert?style=plastic)
[![GitHub license](https://img.shields.io/github/license/Ninja-Developers/jsv-convert?style=plastic)](https://github.com/Ninja-Developers/jsv-convert/blob/master/LICENSE)


---
 Converts Javascript object to csv file

## Installation 
```
npm i jsv-convert
```

## In Nodejs 
```
const {prepareTable} = require('../index')

const params = [{laguage: 'Javascript',rating: 10},{laguage: 'Dart',rating: 10}]
const data = prepareTable(params) // pass in a array of objects 

console.log(data)
```

Outputs the data in a array suitable for csv file format 


| language      | rating        
| ------------- |:-------------:|
| Javascript    | 10            |
| Dart          | 10            |

