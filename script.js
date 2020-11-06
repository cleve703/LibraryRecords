let myLibrary = []
        
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.toggleRead = function() {
  if (this.read == false) {
    this.read = true;
  }
  else {
    this.read = false;
  }
  insertData();
}

var tableRef = document.getElementById('library').getElementsByTagName('tbody')[0];

function addToLibrary(title, author, pages, read) {
  var num = (myLibrary.length + 1);
  eval(`var book${num} = new Book(title, author, pages, read);`);
  eval(`myLibrary.push(book${num});`);  
  insertData();
}

addToLibrary("War and Peace", "Leo Tolstoy", "1225", false)
addToLibrary("On Killing", "Dave Grossman", "400", true)
addToLibrary("South of Broad", "Pat Conroy", "528", false)
        
function insertData() {
  var table = document.getElementsByTagName('tbody');
  var tr = "";
  var i = 0;
  myLibrary.forEach(x=>{
     tr+='<tr>';
     tr+='<td>'+x.title+'</td>'+'<td>'+x.author+'</td>'+'<td>'+x.pages+'</td>'+'<td><button type="button" class="read-status" id="read-status-'+i+'">'+x.read+'</button></td>'+'<td><button type="button" class="delete-button" id="delete-'+i+'">Delete</td>';
     tr+='</tr>';
     i+=1;
    })
  tableRef.innerHTML=tr;
  myLibrary.forEach(addButtonActions);
}

function addButtonActions(item, index) {
  document.getElementById(`delete-${index}`).addEventListener('click', function(){
    myLibrary.splice(index, 1)
    insertData();
  })
  document.getElementById(`read-status-${index}`).addEventListener('click', function(){
    myLibrary[index].toggleRead();
    insertData();
  })
}


document.getElementById('add-book').addEventListener('click', function(){
  document.getElementById('new_book').style.display = "block";
  document.getElementById('add-book').style.display = "none";
})

document.getElementById('new_title_submit').addEventListener('click', function(){
  var title = document.getElementById('new_title').value;
  var author = document.getElementById('new_author').value;
  var pages = document.getElementById('new_pages').value;
  var read = document.querySelector('input[name="new_read"]:checked').value;
  if (String(read).toLocaleLowerCase() == true) {
    read = true
  } else {
    read = false
  }
  addToLibrary(title, author, pages, read);
  clearForm()
  document.getElementById('add-book').style.display = "block";
  document.getElementById('new_book').style.display = "none";
})

document.getElementById('new_title_cancel').addEventListener('click', function(){
  clearForm()
  document.getElementById('add-book').style.display = "block";
  document.getElementById('new_book').style.display = "none";
})

function clearForm() {
  document.getElementById('new_title').value = "";
  document.getElementById('new_author').value = "";
  document.getElementById('new_pages').value = "";
  document.querySelector('input[name="new_read"]').checked = false;
}

insertData()