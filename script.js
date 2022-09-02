const disModel = document.querySelector(".node-add-book");
const nodeBackground = document.querySelector(".node-background");
const nodeCloseBtn = document.querySelector(".close");
const nodeBookModel = document.querySelector(".node-add-book");
const nodeDeleteBackground = document.querySelector(".node-delete-modal-background");
const nodeDeleteAllWarning = document.querySelector(".node-delete-warning");
// START Buttons
const nodeAddBookBtn = document.querySelector(".add");
const nodeDeleteAllBtn = document.querySelector(".remove-all");
const nodeDeleteBtn = document.querySelector(".remove");
const nodeDelModelBtn = document.querySelector(".remove-close");
const nodeCancelBtn = document.querySelector(".cancel");
const nodeTrashBtn = document.querySelector(".trash");
const nodeFormAddBtn = document.querySelector(".node-form-add-btn");
//
const BookContainer = document.querySelector(".main");

//Form element inputs
const form = document.querySelector(".form-style");
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let readInput = document.getElementById("read");

// Book Class Start: Makes book object

let elementid;
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

// Add book button on form
nodeFormAddBtn.addEventListener("click", function () {
	const newBook = new Book(
		titleInput.value,
		authorInput.value,
		pagesInput.value,
		readInput.checked,
	);
	elementid = newBook.arrId;
	myLibrary.push(newBook);
	renderLibrary();
	nodeBackground.classList.remove();
	disModel.classList.remove();
	form.reset()
});

function renderLibrary() {
	const newCard = document.createElement("div");
	const deleteBook = document.createElement("img");
	const titleDiv = document.createElement("div");
	const titlelabel = document.createElement("p");
	const dynamicTitle = document.createElement("p");
	const divAuthor = document.createElement("div");
	const labelAuthor = document.createElement("p");
	const dynamicAuthor = document.createElement("p");
	const divPages = document.createElement("div");
	const labelPages = document.createElement("p");
	const dynamicPages = document.createElement("p");
	const divRead = document.createElement("div");
	const readChanges = document.createElement("button");
	const dynamicRead = document.createElement("p");
	//
	BookContainer.appendChild(newCard);
	newCard.appendChild(deleteBook);
	deleteBook.classList.add("trash");
	deleteBook.setAttribute(
		"src",
		"img"
	);
	newCard.setAttribute(`eleId`, `${elementid}`);
	//
	BookContainer.appendChild(newCard);
	// render trash can for book delete functionality
	newCard.appendChild(deleteBook);
	deleteBook.classList.add("trash");
	deleteBook.setAttribute(
		"src",
		"./Images/delete_FILL0_wght400_GRAD0_opsz48.svg"
	);
	newCard.classList.add("book-card-container");
	// set unique id for book card element
	newCard.setAttribute(`eleId`, `${elementid}`);

	newCard.appendChild(titleDiv);
	titleDiv.classList.add("book-title");
	titleDiv.appendChild(titlelabel);
	titlelabel.textContent = `Title:`;
	titleDiv.appendChild(dynamicTitle);
	newCard.appendChild(divAuthor);
	divAuthor.classList.add("book-author");
	divAuthor.appendChild(labelAuthor);
	labelAuthor.textContent = `Author:`;
	divAuthor.appendChild(dynamicAuthor);
	newCard.appendChild(divPages);
	divPages.classList.add("book-pages");
	divPages.appendChild(labelPages);
	divPages.textContent = `Pages:`;
	divPages.appendChild(dynamicPages);

	//
	newCard.appendChild(divRead);
	divRead.classList.add("book-read");
	divRead.appendChild(readChanges);
	readChanges.textContent = "Change Status";
	divRead.appendChild(dynamicRead);

	//delete card
	deleteBook.addEventListener("click", function () {
		let currentIndex = myLibrary.findIndex(
			(book) => newCard.getAttribute("eleId") == book.arrId
		);
		console.log(newCard.getAttribute("eleId"));
		console.log(elementid);
		console.log(currentIndex);

		myLibrary.splice(currentIndex, 1);
		newCard.remove();
	});
	dynamicTitle.textContent = titleInput.value;
	dynamicAuthor.textContent = authorInput.value;
	dynamicPages.textContent = pagesInput.value;
	if (!readInput.checked) {
		dynamicRead.textContent = "Unread";
	} else {
		dynamicRead.textContent = "Read";
	}

	readChanges.addEventListener("click", function () {
		let curIndedx = myLibrary.findIndex(
			(book) => newCard.getAttribute("eleId") == book.arrId
		);
		if (dynamicRead.textContent === "Read") {
			dynamicRead.textContent = "Unread";
			myLibrary[curIndedx].read = false;
		} else {
			dynamicRead.textContent = "Read";
			myLibrary[curIndedx].read = true;
		}
	});
}
//Open
nodeAddBookBtn.addEventListener("click", function () {
	nodeBackground.classList.add("node-background-visible");
	disModel.classList.add("node-visible");
});
// close add book modal
nodeBackground.addEventListener("click", function (e) {
	if (e.target.matches(".node-background-visible")) {
		nodeBackground.classList.remove("node-background-visible");
		disModel.classList.remove("node-visible");
		form.reset();
	}
});
nodeCloseBtn.addEventListener("click", function () {
	nodeBackground.classList.remove("node-background-visible");
	disModel.classList.remove("node-visible");
	form.reset();
});


// open delete all modal

nodeDeleteAllBtn.addEventListener("click", function () {
	nodeDeleteAllWarning.classList.add("warn-node-visible");
	nodeDeleteBackground.classList.add("warn-node-background-visible");
});
// close delete all modal
nodeDelModelBtn.addEventListener("click", function () {
	nodeDeleteAllWarning.classList.remove("warn-node-visible");
	nodeDeleteBackground.classList.remove("warn-node-background-visible");
});
nodeDeleteBackground.addEventListener("click", function (e) {
	if (e.target.matches(".node-warn-visible")) {
		nodeDeleteBackground.classList.remove("warn-node-background-visible");
		nodeDeleteAllWarning.classList.remove("warn-node-visible");
	}
});
nodeCancelBtn.addEventListener("click", function () {
	nodeDeleteAllWarning.classList.remove("warn-node-visible");
	nodeDeleteBackground.classList.remove("warn-node-background-visible");
});
nodeDeleteBtn.addEventListener("click", function () {
	console.log("clicked");
	document
		.querySelectorAll(".book-card-container")
		.forEach((e) => e.parentNode.removeChild(e));
	myLibrary.splice(0, myLibrary.length);
	nodeDeleteAllWarning.classList.remove("warn-node-visible");
	nodeDeleteBackground.classList.remove("warn-node-background-visible");
});







