const Music = require('./Music')
const Media = require('./Media')

describe('Music tests', () => {
  test('Can create a new Book instance that is child of Media', () => {
    const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 3949)
    expect(music1 instanceof Music).toBe(true)
    expect(music1 instanceof Media).toBe(true)
  })

  test('Music has properties of artist and length', () => {
    const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 3949)
    expect(music1.artist).toBe('Beyonce')
    expect(music1.length).toBe(3949)
  })

  test('Music summary method returns the correct summary', () => {
    const music2 = new Music('Renaissance', 2022, 'R&B', 'Beyonce', 3734)
    expect(music2.summary()).toBe(
      'Title: Renaissance, Artist: Beyonce, Year: 2022, Genre: R&B, Length: 3734 seconds'
    )
  })

  test('Music has static shortestAlbum method that returns shortest album', () => {
    const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 3949)
    const music2 = new Music('Renaissance', 2022, 'R&B', 'Beyonce', 3734)
    expect(Music.shortestAlbum([music1, music2])).toEqual(music2)
  })
})
