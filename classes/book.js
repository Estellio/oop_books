class Book{
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }

    addedToUI() {
        console.log(`${this.title} was added to UI`)
    }
    addedToLS() {
        console.log(`${this.title} was added to LS`)
    }
}