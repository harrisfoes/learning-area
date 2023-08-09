/*

Image
Name
Role
Review

*/

const review = [
    {
        "image" : "image",
        "name" : "Susan Smith",
        "role" : "Web Developer",
        "review" : "The website's design is very human. Whenever I feel down and out I always try to get into the zone and become the person I want to be."
    },
    {
        "image" : "image",
        "name" : "Dorian Beedle",
        "role" : "Web Developer",
        "review" : "This is the second review for which we will try to get out of the rut of not doing anything at all"

    }
]

let initialRev = 0;

const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const random = document.getElementById('random');
 
prevButton.addEventListener('click', function(){
    console.log("prev");
});

nextButton.addEventListener('click', function(){
    console.log("next");
});

random.addEventListener('click', function(){
    console.log("random");
});
