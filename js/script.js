// Array that holds the names of all of the possible computer languages that can appear on the page
var languages = [
    "Actionscript",
    "Ada",
    "Assembly",
    "Bash",
    "BASIC",
    "Binary",
    "Brainfuck",
    "C",
    "C++",
    "C#",
    "Caml",
    "COBOL",
    "ColdFusion",
    "Curl",
    "D",
    "DIBOL",
    "Erlang",
    "Forth",
    "Fortran",
    "Haskell",
    "Java",
    "Javascript",
    "Lisp",
    "Lua",
    "Objective-C",
    "OCaml",
    "Pascal",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Rust",
    "Scala",
    "Smalltalk",
    "SQL",
    "Swift",
    "Tcl",
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
