const books = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    imageLink: "./images/chinua.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Things_Fall_Apart",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    imageLink: "./images/fairyTales.jpg",
    language: "Danish",
    link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
  },
  {
    author: "Dante Alighieri",
    country: "Italy",
    imageLink: "./images/dante.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Divine_Comedy",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
  },
  {
    author: "Unknown",
    country: "Sumer and Akkadian Empire",
    imageLink: "./images/Penguin.jpg",
    language: "Akkadian",
    link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: -1700,
  },
  {
    author: "Unknown",
    country: "Achaemenid Empire",
    imageLink: "./images/Achaemenid.jpg",
    language: "Hebrew",
    link: "https://en.wikipedia.org/wiki/Book_of_Job",
    pages: 176,
    title: "The Book Of Job",
    year: -600,
  },
];

const main = document.createElement("main");
const container = document.createElement("section");
container.classList.add("container");

const bookElements = books.map((book) => {
  const article = document.createElement("article");
  article.classList.add("book");

  const title = document.createElement("h3");
  title.textContent = book.title;
  title.classList.add("title");

  const author = document.createElement("h5");
  author.textContent = `Author: ${book.author}`;
  author.classList.add("author");

  const year = document.createElement("p");
  year.textContent = `Year: ${book.year}`;
  year.classList.add("year");

  const image = document.createElement("img");
  image.src = book.imageLink;
  image.classList.add("image");

  const link = document.createElement("a");
  link.href = book.link;
  link.textContent = "View on Wikipedia";
  link.classList.add("link");

  const country = document.createElement("p");
  country.textContent = `Country: ${book.country}`;
  country.classList.add("country");

  const language = document.createElement("p");
  language.textContent = `Language: ${book.language}`;
  language.classList.add("language");

  const pages = document.createElement("p");
  pages.textContent = `Pages: ${book.pages}`;
  pages.classList.add("pages");

  article.appendChild(title);
  article.appendChild(author);
  article.appendChild(year);
  article.appendChild(image);
  article.appendChild(link);
  article.appendChild(country);
  article.appendChild(language);
  article.appendChild(pages);

  return article;
});

container.append(...bookElements);
main.appendChild(container);
document.body.appendChild(main);
