const disModel = document.querySelector(".add-book");
const nodeBackground = document.querySelector(".node-background");
const nodeCloseBtn = document.querySelector(".close");
const nodeBookModel = document.querySelector(".add-book");
const nodeDeleteBackground = document.querySelector(".node-delete-modal-background");
const nodeDeleteWarning = document.querySelector(".node-delete-warning warning-style");

//Start Buttons
const nodeAddBookBtn = document.querySelector(".add");
const nodeDeleteAllBtn = document.querySelector(".remove-all");
const nodeDeleteBtn = document.querySelector("");
const nodeDelModelBtn = document.querySelector("");
const nodeCancelBtn = document.querySelector("");
const nodeTrashBtn = document.querySelector("");
const nodeFormAddBtn = document.querySelector(".node-form-add-btn");

//
const BookContainer = document.querySelector(".main");

//Form element inputs
const form = document.querySelector(".form-style");
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let readInput = document.getElementById("read");

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

//Add a abook button to the form
nodeFormAddBtn.addEventListener("click", function () {
	const newBook = new Book(
		titleInput.value,
		authorInput.value,
		pagesInput.value,
		readInput.checked,
	);
	elementId = newBook.arrId;
	myLibrary.push(newBook);
	renderBookCard();
	nodeBackground.classList.remove();
	disModel.classList.remove();
	form.reset()
});

