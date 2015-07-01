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

// Put the random computer language name into the page
$(document).ready(function() {

    $('.random-language').html(languages[randomLang()]);

});
