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

var tableRef = document.getElementById('library').getElementsByTagName('tbody')[0];

function addToLibrary(title, author, pages, read) {
  var num = (myLibrary.length + 1);
  eval(`var book${num} = new Book(title, author, pages, read);`);
  eval(`myLibrary.push(book${num});`);  
  console.log(myLibrary);
  insertData()
}

function insertData() {
  var table = document.getElementsByTagName('tbody');
  var tr="";
  myLibrary.forEach(x=>{
     tr+='<tr>';
     tr+='<td>'+x.title+'</td>'+'<td>'+x.author+'</td>'+'<td>'+x.pages+'</td>'+'<td>'+x.read+'</td>'
     tr+='</tr>'

  })
  tableRef.innerHTML=tr;
  console.log(tr);
}
