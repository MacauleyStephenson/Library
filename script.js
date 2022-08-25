const disModel = document.querySelector("");
const nodeBackground = document.querySelector("");
const nodeCloseBtn = document.querySelector("");
const nodeBookModel = document.querySelector("");
const nodeDeleteBackground = document.querySelector("");
const nodeDeleteWarning = document.querySelector("");

//Start Buttons
const nodeAddBook = document.querySelector("");
const nodeDeleteAllBtn = document.querySelector("");
const nodeDeleteBtn = document.querySelector("");
const nodeDelModelBtn = document.querySelector("");
const nodeCancelBtn = document.querySelector("");
const nodeTrashBtn = document.querySelector("");
const nodeFormAddBtn = document.querySelector("");

//
const BookContainer = document.querySelector("");

//Form element inputs
const form = document.querySelector("");
let titleInput = document.getElementById("");
let authorInput = document.getElementById("");
let pagesInput = document.getElementById("");
let readInput = document.getElementById("");

//Objects array
let elementId;
const myLibrary = [];
class Book {
	arrId = (Date.now() + "").slice(-10);
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}


function addBookToLibrary() {

}