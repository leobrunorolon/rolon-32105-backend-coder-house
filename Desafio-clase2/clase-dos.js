class User {
  constructor(name, lasname, books, pets) {
    this.name = name;
    this.lasname = lasname;
    this.books = books;
    this.pets = pets;
  }
  getFullName() {
    return `My name is ${this.name} ${this.lasname}`;
  }
  addMascotas(add) {
    this.pets.push(add);
    return `Add ${add.name}`;
  }
  countMascotas() {
    return `You have ${pets.length} pets`;
  }
  addBooks(add) {
    this.books.push(add);
    return `Add ${add.title}`;
  }
  getBookNames() {
    const title = this.books.map((item) => item.title);
    return title;
  }
}

const books = [
  {
    isbn: "9781593279509",
    title: "Eloquent JavaScript, Third Edition",
    subtitle: "A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    published: "2018-12-04T00:00:00.000Z",
    publisher: "No Starch Press",
    pages: 472,
    description:
      "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    website: "http://eloquentjavascript.net/",
  },
  {
    isbn: "9781491943533",
    title: "Practical Modern JavaScript",
    subtitle: "Dive into ES6 and the Future of JavaScript",
    author: "Nicolás Bevacqua",
    published: "2017-07-16T00:00:00.000Z",
    publisher: "O'Reilly Media",
    pages: 334,
    description:
      "To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
    website: "https://github.com/mjavascript/practical-modern-javascript",
  },
  {
    isbn: "9781593277574",
    title: "Understanding ECMAScript 6",
    subtitle: "The Definitive Guide for JavaScript Developers",
    author: "Nicholas C. Zakas",
    published: "2016-09-03T00:00:00.000Z",
    publisher: "No Starch Press",
    pages: 352,
    description:
      "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
    website: "https://leanpub.com/understandinges6/read",
  },
];
const pets = [
  {
    name: "Purrsloud",
    species: "Cat",
    favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
    birthYear: 2016,
    photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
  },
  {
    name: "Barksalot",
    species: "Dog",
    birthYear: 2008,
    photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg",
  },
];

const addPets = {
  name: "Meowsalot",
  species: "Cat",
  favFoods: ["tuna", "catnip", "celery"],
  birthYear: 2012,
  photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
};
const addBooks = {
  isbn: "9781484200766",
  title: "Pro Git",
  subtitle: "Everything you neeed to know about Git",
  author: "Scott Chacon and Ben Straub",
  published: "2014-11-18T00:00:00.000Z",
  publisher: "Apress; 2nd edition",
  pages: 458,
  description:
    "Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
  website: "https://git-scm.com/book/en/v2",
};

const user = new User("Gregor", "Mcmilan", books, pets);

// user whit params
console.log(user);
// user full name
console.log(user.getFullName());
//add pets
console.log(user.addMascotas(addPets));
console.log(user.countMascotas());
//add books
console.log(user.addBooks(addBooks));
console.log(user.books);
console.log(user.getBookNames());
