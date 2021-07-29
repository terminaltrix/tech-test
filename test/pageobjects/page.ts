export class Page {
    async open () {
        return browser.url(`https://applyapp.anz.com/?producttype=aa&sourcecode_1=QMV&schema=sola`)
    }
}
