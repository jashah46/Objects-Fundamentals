console.log("Object Fundamentals Review");

// ! ADD AND COMMIT

// sample album object
const tenAlbum = {
    title: "Ten",
    artist: "Pearl Jam",
    released: "8/27/1991",
    tracks: [
        {
            title: "Once",
            length: 232
        },
        {
            title: "Even Flow",
            length: 293
        },
        {
            title: "Alive",
            length: 341
        },
        {
            title: "Why Go",
            length: 200
        },
        {
            title: "Black",
            length: 344
        },
        {
            title: "Jeremy",
            length: 319
        },
        {
            title: "Oceans",
            length: 162
        },
        {
            title: "Porch",
            length: 211
        },
        {
            title: "Garden",
            length: 299
        },
        {
            title: "Deep",
            length: 258
        },
        {
            title: "Release",
            length: 543
        }
    ]
};

// Dot vs. Bracket Notation - accessing properties
// TODO: USING DOT NOTATION, access the object properties (artist, title, released) and log the following message to the console using string interpolation: "Pearl Jam's Album Ten was released on 8/27/1991"
// println(s"user's full name is ${user.fullName}")
let objectProperties1 = [tenAlbum.artist, tenAlbum.title, tenAlbum.released];
console.log(`pearl jam's album ten was relaed on ${objectProperties1[2]}`)

// TODO: Output the same messge to the console using BRACKET NOTATION

console.log(`${tenAlbum['artist']}'s album ${tenAlbum['title']} was released on ${tenAlbum['released']}.`)
// Iterating Object keys/values
// TODO: Iterate the tenAlbum object and log the key/value pairs to the console using a for/in loop
// example: "title": "Ten"
for (let item in tenAlbum){
console.log(`${item}: ${tenAlbum[item]}`)}
// Accessing iterable properties on objects
// TODO: Iterate the tracks array and output the title of each song and its song length using a for loop of your choosing. The output should look something like this:
/*
    Title: Once - Length: 232
    Title: Even Flow - Length: 293
    etc.
*/

for (const property in tenAlbum.tracks){
    console.log(`Title: ${tenAlbum.tracks[property].title} - Length: ${tenAlbum.tracks[property].length}`)

}

for (const object of tenAlbum.tracks) {
    console.log(`Title: ${object.title} l Length: ${object.length}`)
}

// ! ADD AND COMMIT

// OBJECT.keys() / .values() / .entries()
// TODO: log the keys of the tenAlbum object using Object.keys()

// TODO: log the values of the tenAlbum object Object.values()

// TODO: log the entries of the tenAlbum object Object.entries()

// TODO: iterate the tenAlbum object and log the key/value pairs to the console using each of the above Object methods:
// .keys()
// .values()
// .entries()

// ! ADD AND COMMIT

// USING THE DATA FROM .setlists
import { setlistsFromAPI } from "./setlists.js";
// TODO: Log 'setlistsFromAPI' to the console

// TODO: USING the 'setlistsFromAPI' data, find the event dated 18-08-2018 and store that event object in a variable named 'event'

// TODO: log the 'event' object to the console

// TODO: USING DOT OR BRACKET NOTATION AND STRING INTERPOLATION, create a string which includes the name of the band, the venue, and the date of the event and store it in a new variable clled "bandVenueDate"
// this string should look something like "Pearl Jam - Wrigley Field - 18-08-2018"

// TODO: log the 'bandVenueDate' string to the console

// TODO: Find the first set of songs of the 'event' object and store it in a variable named 'firstSet'

// TODO: USING ANY OF THE WAYS TO LOOP AND ACCESS OBJECT PROPERTIES - iterate the 'firstSet' array and log the name of each song to the console

// ! ADD AND COMMIT

// BONUS IF YOU HAVE TIME...
// Using only properties of the event object we've previously defined
// TODO: Insert the bandVenueDate string into the innerHTML of the element with the id of "header" in index.html

// TODO: Iterate the first set of songs for that event, create a list element for each song with the song's title and insert that new list element into the innerHTML of the element with the id of "setlist" in index.html
