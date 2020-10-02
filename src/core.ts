import fs from 'fs'

class FileConverter {
    private path: string;
    private data: Array<any>;
    private fields: Array<string>;
    private columns: Array<string>;
    private csvFormat: string;
    constructor(path: string) {
        this.path = path;
        let buf = fs.readFileSync(this.path).toString();
        this.data = JSON.parse(buf);
        this.fields = this.generateFields();
        this.columns = this.generateColumns();
        this.csvFormat = this.generateCsvFormat();
    }
    generateFields(): Array<string> {
        let feilds: Array<string> = [];
        let putfields = (keys: Array<string>) => {
            keys.forEach((el: string) => {
                if (!feilds.includes(el)) {
                    feilds.push(el)
                }
            })
        }
        this.data.forEach((el: object) => {
            let keys: Array<string> = Object.keys(el);
            putfields(keys)
        })

        return feilds
    }

    generateColumns(): Array<string> {
        let columns: Array<string> = []
        const fieldsCount = this.fields.length;

        this.data.forEach((el: any) => {
            let row: string = ''
            this.fields.forEach((f: string, i: number) => {
                if (el[f]) {
                    row += el[f]
                }
                // Adding comma
                if (i < fieldsCount - 1) {
                  row += ','
                }
            })
            columns.push(row)
        })

        return columns
    }

    generateCsvFormat(): string{
        let fieldString: string = ''
        this.fields.forEach((el: string) => {
            fieldString+=el+','
        })
        let colStr: string = ''
        this.columns.forEach((el: string) => {
            colStr+=el+"\n"
        })
        return `${fieldString}
${colStr}`
    }
    generateCsvFile(path: string){
        fs.writeFileSync(path, this.csvFormat);
    }
}

export default FileConverter
