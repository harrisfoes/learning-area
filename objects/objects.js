class Book {
    constructor(title, author, numOfPages, readStatus) {
        this.title = title
        this.author = author
        this.numOfPages = numOfPages
        this.readStatus = readStatus

        this.info = function () {
            return `${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.readStatus ? "already read" : "not read yet"}`
        }
    }
}

//"The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 267, false)
const AswangRoyale = new Book("Aswang Royale", "Harris Escalante", 497, true)


console.log(theHobbit.info())
console.log(AswangRoyale.info())