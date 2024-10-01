// import the Media class:

const Media = require('./Media');

// create your Movie class:

class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre);
        this.director = director;
        // if(rating <1 || rating > 5){
            // throw new Error("Rating must be between 1 and 5")
        //}
        this.rating = rating;
        this.duration = duration;
    }

    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static longestMovie(arr){
        if(arr.length === 0){
            return null;
        }
        let longest = arr[0];
        for(let i = 1; i<arr.length; i++){
            if(arr[i].duration > longest.duration){
                longest = arr[i];
        }
    }
        return longest
    }
    
    
}

// don't change below
module.exports = Movie;