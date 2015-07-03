// Arrays that hold the names of all of the possible computer languages that can appear on the page

// Common languages
var languages_common = [
    "Assembly",
    "Bash",
    "BASIC",
    "C",
    "C++",
    "C#",
    "Fortran",
    "Haskell",
    "Java",
    "Javascript",
    "Lisp",
    "Lua",
    "Objective-C",
    "Pascal",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "SQL",
    "Swift",
    "Visual Basic"
];

// Uncommon languages
var languages_uncommon = [
    "Actionscript",
    "Ada",
    "Caml",
    "COBOL",
    "ColdFusion",
    "Curl",
    "D",
    "DIBOL",
    "OCaml",
    "Rust",
    "Scala",
    "Tcl"
];

// Strange languages
var languages_strange = [
    "Binary",
    "Brainfuck",
    "Erlang",
    "Forth",
    "Smalltalk"
];

// Pick a random computer language from the list given as an argument
function randomLang(language_list) {
    return Math.floor(Math.random() * language_list.length);
}

// Pick a random list of computer languages
function randomList() {
    // Set the chance for each list to be chosen
    var common_range = 84;
    var uncommon_range = 35;
    var strange_range = 20;
    var total_range = common_range + uncommon_range + strange_range;

    // Randomly choose the list of languages to choose a random language from
    language_list_num = Math.floor((Math.random() * total_range) + 1);
    var language_list;

    if (language_list_num < common_range) {
        language_list = languages_common.slice(0);
    } else if (language_list_num < (uncommon_range + common_range)) {
        language_list = languages_uncommon.slice(0);
    } else {
        language_list = languages_strange.slice(0);
    }

    return language_list.slice(0);
}

// Put a random computer language name into the page
function setRandomLang() {
    // Pick a random list of computer languages
    var language_list = randomList();

    // Put the random computer language name into the page
    $('.random-language').html(language_list[randomLang(language_list)]);
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
