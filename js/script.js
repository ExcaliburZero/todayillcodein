// Array that holds the names of all of the possible computer languages that can appear on the page
var languages = [
    "C",
    "C++",
    "C#",
    "COBOL",
    "Java",
    "Javascript",
    "Objective-C",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "SQL",
    "Visual Basic"
];

// Pick a random computer language
function randomLang() {
    return Math.floor((Math.random() * languages.length));
}

// Put a random computer language name into the page
function setRandomLang() {
    $('.random-language').html(languages[randomLang()]);
    return;
}

// JQuery run once the page loads
$(document).ready(function() {

    // Once the page loads, put a random computer language name into the page
    setRandomLang();

    // Reset the random language displayed when the user clicks on the main text
    $('.main-text').click(function() {
        setRandomLang();
    });

});
