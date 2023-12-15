class Book{
    constructor(title, authorFirst, authorLast, year, publisher){
        this.title = title
        this.authorFirst = authorFirst
        this.authorLast = authorLast
        this.year = year
        this.publisher = publisher
    }

    generateCitation(){
        return String.format("%s, %c. (%s). %s. %s.", authorLast, authorFirst.charAt(0),
                publicationYear, title, publisher);
    }
}

function generateCitation() {
    // Get input values
    const title = document.getElementById('title').value;
    const authorFirst = document.getElementById('authorFirst').value;
    const authorLast = document.getElementById('authorLast').value;
    const year = document.getElementById('year').value;
    const publisher = document.getElementById('publisher').value;

    // Create an instance of the Book class
    const book = new Book(title, authorFirst, authorLast, year, publisher);

    // Generate the citation
    const citation = book.generateCitation();

    // Display the citation in the result area
    document.getElementById('citationResult').innerHTML = `<p>${citation}</p>`;
}

// var book = Book('Gone with the Wind', 'Some', "Author", 1967, 'Penguin Random House')

// document.write(book.generateCitation())