exports.check = (name) => {
    return `Hello ${name}`
}

const title = []
const table = []


exports.prepareTitle = (datas) => {
    datas.forEach(data => {
        for (let key in data) {

            if (!title.includes(key)) {
                title.push(key)
            }
        }
    })
}


exports.prepareTable = (datas) => {
    this.prepareTitle(datas)
    datas.forEach(data => {
        const values = Object.values(data)
        const keys = Object.keys(data)
        let x = 0
        const container = []
        for (let t in title) {
            if (title[t] !== keys[x]) {
                container.push('')
            } else {
                container.push(values[x])
                x++;
            }
        }
        table.push(container)
    })

    return [title, table]
}