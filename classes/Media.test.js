const Media = require('./Media')

describe('Media Tests', () => {
  test('Can create instance of Media class', () => {
    const book = new Media('The Catcher in the Rye', 1951, 'Fiction')
    expect(book instanceof Media).toBe(true)
  })

  test('Media has properties of title, year, and genre', () => {
    const book = new Media('The Catcher in the Rye', 1951, 'Fiction')
    expect(book.title).toBe('The Catcher in the Rye')
    expect(book.year).toBe(1951)
    expect(book.genre).toBe('Fiction')
  })

  test('Media has summary method that returns the correct value', () => {
    const music = new Media('Abbey Road', 1969, 'Rock')
    expect(music.summary()).toBe('Title: Abbey Road, Year: 1969, Genre: Rock')
  })

  test('Media has static totalMedia count that increases with each Media instance', () => {
    const book = new Media('The Catcher in the Rye', 1951, 'Fiction')
    expect(Media.totalMediaCount).toBe(4)
    const music = new Media('Abbey Road', 1969, 'Rock')
    expect(Media.totalMediaCount).toBe(5)
  })
})
