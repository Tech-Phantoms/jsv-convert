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
---

## 🏆 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md)  for information on how to contribute to the project.

##  💼 Code of Conduct

We want to facilitate a healthy and constructive community behavior by adopting and enforcing our code of conduct.

Please adhere towards our [Code of Conduct](CODE_OF_CONDUCT.md).


## ❤️ Thanks to our awesome contributors.

### 🌟 STAR AND FORK THE REPOSITORY FOR YOUR FUTURE REFERENCE.🌟

---

## In Nodejs 
```
const {prepareTable} = require('../index')

const params = [{laguage: 'Javascript',rating: 10},{laguage: 'Dart',rating: 10}]
const data = prepareTable(params) // pass in a array of objects 

console.log(data)
```
## Usage
This is a utility library for converting JSON data to CSV format

Steps to be followed :-
* Import `FileCoverter` class
* Create an object of `FileConverter` which takes path of the file to be converted as parameter
* invoke `generateCsvformat()` method
* `generateCsvformat()` method returns csv data as a string  
* `generateCsvFile(path: string)` takes path of file as argument and writes conveted data to file
```typescript
import {FileConverter} from 'jsv-convert'
import path from 'path'

const fc = new FileConverter(path.join(__dirname,'data.json')) // takes path of the file as a parameter

console.log(fc.generateCsvFormat())
fc.generateCsvFile(path)            
```


### Examples:-
JSON
```json
const data = [
	{"language": "javascript", "rating": 5},
	{"language": "java", "rating": 5}
]
```
CSV
```json
const data = `
	language, rating
	javascript, 5
	java, 5
`
```
---
* JSON
```json
const data = [
	{"fruit": "Apple","size": "Large","color": "Red"},
	{"fruit": "Mango","size": "Small","color": "Yellow"},
	{"fruit": "Tangerine","size": "Large","color": "Orange"}
]
```
CSV
```json
const data =  ` 
	fruit, size, color
	Apple, Large,Red  
	Mango, Small, Yellow
	Tangerine, Large, Orange
`
```
---
JSON
```json
const data={
    "firstName": "Rack",
    "lastName": "Jackon",
    "gender": "man",
    "age": 24,
    "address": {
        "streetAddress": "126",
        "city": "San Jone",
        "state": "CA",
        "postalCode": "394221"
    },
    "phoneNumbers": [
        { "type": "home", "number": "7383627627" }
    ]
}
```
CSV
```json
const data = `
	firstName, lastName, gender, age, address_streetAddress, address_city, 
	address_state, address_postalCode, phoneNumbers_type, phoneNumbers_number
	Rack, Jackon, man, 24, 126, San Jone, CA, 394221, home, 7383627627
`
```
Outputs the data in a array suitable for csv file format 



| language      | rating        |
| ------------- |:-------------:|
| Javascript    | 10            |
| Dart          | 10            |
