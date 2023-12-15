// citation formats from apa citation style guide by columbia

class Book{
    constructor(title, authorFirst, authorLast, year, publisher){
        this.title = title
        this.authorFirst = authorFirst
        this.authorLast = authorLast
        this.year = year
        this.publisher = publisher
    }

    generateCitation(){
        return `${this.authorLast}, ${this.authorFirst.charAt(0)}. (${this.year}). <em>${this.title}</em>. ${this.publisher}.`
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
        return `${this.authorLast}, ${this.authorFirst.charAt(0)}. (${this.datePublished.getFullYear()}, ${this.datePublished.getMonth()+1} 
                ${this.datePublished.getDate()+1}). <em>${this.articleTitle}</em>. ${this.websiteTitle}. ${this.url}`
    }

}

class Journal{ // starting with journal article from website format (seems like most likely need)
    constructor(articleTitle, authorFirst, authorLast, journalName, url, year, volumeNumber, issueNumber){
        this.articleTitle = articleTitle
        this.authorFirst = authorFirst
        this.authorLast = authorLast
        this.journalName = journalName
        this.url = url
        this.year = year
        this.volumeNumber = volumeNumber
        this.issueNumber = issueNumber
    }

    generateCitation(){
        return `${this.authorLast}, ${this.authorFirst.charAt(0)}. (${this.year}). ${this.articleTitle}. 
                <em>${this.journalName}, ${this.volumeNumber}</em>(${this.issueNumber}). ${this.url}`
        // Author's Last Name, First Initial. Second Initial if Given. (Year of Publication). Title of article: Subtitle if any. Name of Journal, Volume Number(Issue Number if given). URL
    }

}

function generateBookCitation() {
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
    // document.getElementById('citationResult').innerHTML = `<p>${citation}</p>`;
    addCitationElement(citation);
}

function generateWebsiteCitation() {
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
    // document.getElementById('citationResult').innerHTML = `<p>${citation}</p>`;
    addCitationElement(citation);
}

function generateJournalCitation() {
    // Get input values
    const articleTitle = document.getElementById('journalArticleTitle').value;
    const authorFirst = document.getElementById('journalAuthorFirst').value;
    const authorLast = document.getElementById('journalAuthorLast').value;
    const year = document.getElementById('journalYear').value;
    const journalName = document.getElementById('journalName').value;
    const url = document.getElementById('journalUrl').value;
    const volumeNumber = document.getElementById('volumeNumber').value;
    const issueNumber = document.getElementById('issueNumber').value;


    // Create an instance of the Book class
    const journal = new Journal(articleTitle, authorFirst, authorLast, journalName, url, year, volumeNumber, issueNumber)

    // Generate the citation
    const citation = journal.generateCitation();

    // Display the citation in the result area
    // document.getElementById('citationResult').innerHTML = `<p>${citation}</p>`;
    addCitationElement(citation);

}

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
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
  // document.getElementById("defaultOpen").click();

function clearForm(){
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
}

function addCitationElement(citationText){
    const citationDiv = document.createElement("div");

    const citationElement = document.createElement("p");
    citationElement.innerHTML = `<p>${citationText}</p>`
    citationElement.id = 'citationResult'

    const copyButton = document.createElement("button");
    const copyIcon = document.createElement("img");
    copyIcon.src = "copy-icon.svg";
    copyIcon.width = 15;
    copyIcon.height = 15;
    copyButton.appendChild(copyIcon);
    
    // copyButton.onclick = function(){citationElement.select();
    //                                 document.execCommand("copy");};
    copyButton.onclick = function(){
        const blob = new Blob([citationText], { type: 'text/html' });
        navigator.clipboard.write([
            new ClipboardItem({
              'text/html': blob
            })
        ]);
    }
    copyButton.id = "copyButton"

    

    citationDiv.appendChild(citationElement);
    citationDiv.appendChild(copyButton);

    document.getElementById("citationcontent").appendChild(citationDiv);
}

function copyCitation(citation){
    navigator.clipboard.writeText(citation);
}