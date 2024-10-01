const Book = require('./Book')
const Media = require('./Media')

describe('Book Tests', () => {
  test('Can create a new Book instance that is child of Media', () => {
    const book1 = new Book(
      'To Kill a Mockingbird',
      1960,
      'Fiction',
      'Harper Lee',
      281,
      4.4
    )
    expect(book1 instanceof Book).toBe(true)
    expect(book1 instanceof Media).toBe(true)
  })

  test('Book has author, numPages, and rating property', () => {
    const book1 = new Book(
      'To Kill a Mockingbird',
      1960,
      'Fiction',
      'Harper Lee',
      281,
      4.4
    )
    expect(book1.author).toBe('Harper Lee')
    expect(book1.numPages).toBe(281)
    expect(book1.rating).toBe(4.4)
  })

  test('Book has summary method different from the Media summary method', () => {
    const book1 = new Book(
      'To Kill a Mockingbird',
      1960,
      'Fiction',
      'Harper Lee',
      281,
      4.4
    )
    expect(book1.summary()).toBe(
      'Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960, Page Count: 281, Genre: Fiction, Rating: 4.4'
    )
  })

  test('Book has static method highestRating that returns the highest rated book', () => {
    const book1 = new Book(
      'To Kill a Mockingbird',
      1960,
      'Fiction',
      'Harper Lee',
      281,
      4.4
    )
    const book2 = new Book(
      'The Bluest Eye',
      1970,
      'Fiction',
      'Toni Morrison',
      206,
      4.6
    )
    const book3 = new Book(
      'My first novel',
      2020,
      'Fiction',
      'Biblophile',
      121,
      2.2
    )
    expect(Book.highestRating([book1, book2, book3])).toEqual(book2)
  })
})
