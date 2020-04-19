/**
 * Sudo code for the whole code 
 * 
 * problems to be solved:
 * 
 * A function to take js object and parse it to csv 
 * 
 * Figure out a suitable data structure for keeping 
 * the data in the csv format 
 * 
 * Parse the path of the output file
 * 
 * Figure a suitable algo for reading and writing 
 * the files 
 * 
 */


// function to parse js object 

const title = [] 
const table = [] 


const addTitle = (name) => {
    return title.includes(name)
}

// const fillContainer = (key,value) =>{
//     const container = [] 
//     title.forEach(t=>{
//         if(key === t)
//     })
// }

let users = [{name: "Souvik",age: 20},{name: "Souvik",age: 20},{code: "Java"}]


exports.prepareTitle = (datas)=>{
    datsa.forEach(data=>{
        for(let key in data){
    
            if(!title.includes(key)){
                title.push(key)
            }      
        }
    })
}


exports.prepareTable = (datas) => {
    this.prepareTitle(datas)
    datas.forEach(data=>{
        const values = Object.values(data)
        const keys = Object.keys(data)
        let x=0
        const container = [] 
        for(let t in title){
            if(title[t] !== keys[x]){
                container.push('')
            }else{
                container.push(values[x])
                x++;
            }
        }
        table.push(container)
    })
}

console.log(title)
console.log(table)