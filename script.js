let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    if (read == true) {
      return(title + " by " + author + ", " + pages + " pages, already read")
    } else {
      return(title + " by " + author + ", " + pages + " pages, not read yet")
    }
  }
}

function addToLibrary(title, author, pages, read) {
  var num = (myLibrary.length + 1);
  eval(`var book${num} = new Book(title, author, pages, read);`);
  eval(`myLibrary.push(book${num});`);  
  console.log(myLibrary);
}