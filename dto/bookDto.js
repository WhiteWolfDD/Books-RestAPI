class BookDto {
    constructor(book) {
        this.id = book.id;
        this.name = book.name;
        this.photo = book.photo;
        this.description = book.description;
        this.publicationDate = book.publicationDate;
        this.edition = book.edition;
        this.authors = book.authors.map(author => author.name);
        this.language = book.language.language;
        this.category = book.category.name;
        this.length = book.length;
        this.width = book.width;
        this.height = book.height;
        this.pages = book.pages;
        this.publisher = book.publisher.name;
        this.weight = book.weight;
    }
}

module.exports = BookDto;