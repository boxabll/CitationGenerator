class Book{
    constructor(title, authorFirst, authorLast, year, publisher){
        this.title = title
        this.authorFirst = authorFirst
        this.authorLast = authorLast
        this.year = year
        this.publisher = publisher
    }

    generateCitation(){
        return `${this.authorLast}, ${this.authorFirst.charAt(0)}. (${this.year})). ${this.title}. ${this.publisher}.`
        // String.format("%s, %c. (%s). %s. %s.", authorLast, authorFirst.charAt(0),
        //         publicationYear, title, publisher);
    }
}

class Website{
    constructor(articleTitle, authorFirst, authorLast, websiteTitle, url, datePublished){
        this.articleTitle = articleTitle
        this.authorFirst = authorFirst
        this.authorLast = authorLast
        this.websiteTitle = websiteTitle
        this.url = url
        this.datePublished = datePublished
    }

    generateCitation(){
        return `${this.authorLast}, ${this.authorFirst.charAt(0)}. (${this.datePublished.getFullYear()}, ${this.datePublished.getMonth()+1} ${this.datePublished.getDate()+1}). 
        ${this.articleTitle}. ${this.websiteTitle}. ${this.url}`
    }

}

function clearForm(){
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
}

function generateBookCitation() {
    // document.getElementById('citationResult').innerText = 'hello world'
    // alert('hello')
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
    document.getElementById('citationResult').innerText = citation;
}

function generateWebsiteCitation() {
    // document.getElementById('citationResult').innerText = 'hello world'
    // alert('hello')
    // Get input values
    const articleTitle = document.getElementById('articleTitle').value;
    const authorFirst = document.getElementById('authorFirst').value;
    const authorLast = document.getElementById('authorLast').value;
    const date = document.getElementById('datePublished').value;
    const websiteTitle = document.getElementById('websiteTitle').value;
    const url = document.getElementById('url').value;

    var datePublished = new Date(date);

    // Create an instance of the Book class
    const website = new Website(articleTitle, authorFirst, authorLast, websiteTitle, url, datePublished)

    // Generate the citation
    const citation = website.generateCitation();

    // Display the citation in the result area
    document.getElementById('citationResult').innerText = citation;
}

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // document.getElementById("citationresult").style.display = "none"
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    document.getElementById('citationResult').style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
//   document.getElementById("defaultOpen").click();