/* 
Write a function, isItLetter or is_it_letter or IsItLetter, 
which tells us if a given character is a letter or not. */

function isItLetter(character) {
    const regex = /[a-zA-Z]/;

    if (character.match(regex)) {
        console.log("This is a letter.");
        return true;
    } else {
        console.log("This is not a letter.");
        return false;
    }
}
