var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

const add = (bookList, book) => {
  const newBookList = [...bookList, book]
  return newBookList
}

const remove = (bookList, book) => {
  const newBookList = bookList.filter((item) => item != book)
  return newBookList
}

console.log(add(bookList, "Happy Life"))
console.log(remove(bookList, "Philosophiæ Naturalis Principia Mathematica"))

// passing function as argument to another function(piping
console.log(remove(add(bookList, "Healty Life"), "The Hound of the Baskervilles"))
