const Movie = require('./Movie')
const Media = require('./Media')

describe('Movie tests', () => {
  test('Can create a new Movie instance that is child of Media', () => {
    const movie1 = new Movie(
      'Inception',
      2010,
      'Sci-Fi',
      'Christopher Nolan',
      148,
      4.5
    )
    expect(movie1 instanceof Movie).toBe(true)
    expect(movie1 instanceof Media).toBe(true)
  })

  test('Movie instance has additional properties of director, duration, and rating', () => {
    const movie1 = new Movie(
      'Inception',
      2010,
      'Sci-Fi',
      'Christopher Nolan',
      148,
      4.5
    )
    expect(movie1.director).toBe('Christopher Nolan')
    expect(movie1.duration).toBe(148)
    expect(movie1.rating).toBe(4.5)
  })

  test('Movie has summary method that returns string different from Media summary method', () => {
    const movie1 = new Movie(
      'Inception',
      2010,
      'Sci-Fi',
      'Christopher Nolan',
      148,
      4.5
    )
    expect(movie1.summary()).toBe(
      'Title: Inception, Director: Christopher Nolan, Year: 2010, Genre: Sci-Fi, Rating: 4.5'
    )
  })

  test('Movie static longestMovie method that returns the movie with the highest rating', () => {
    const movie1 = new Movie(
      'Inception',
      2010,
      'Sci-Fi',
      'Christopher Nolan',
      148,
      4.5
    )
    const movie2 = new Movie(
      'The Godfather',
      1972,
      'Crime',
      'Francis Ford Coppola',
      175,
      4.7
    )
    expect(Movie.longestMovie([movie1, movie2])).toEqual(movie2)
  })
})
