/*

Image
Name
Role
Review

*/

const review = [
    {
        "image" : "<img src='assets/face_1.png'>",
        "name" : "Susan Smith",
        "role" : "Web Developer",
        "review" : "The website's design is very human. Whenever I feel down and out I always try to get into the zone and become the person I want to be."
    },
    {
        "image" : "<img src='assets/face_2.png'>",
        "name" : "Dorian Beedle",
        "role" : "UI/UX Designer",
        "review" : "This is the second review for which we will try to get out of the rut of not doing anything at all"

    },
    {
        "image" : "<img src='assets/face_3.png'>",
        "name" : "Marcus Moran",
        "role" : "Technical Leader",
        "review" : "From the very first time I met my eyes on this project. My heart said follow-through."

    },
    {
        "image" : "<img src='assets/face_4.png'>",
        "name" : "Jesse Lopangco",
        "role" : "Chief Executive",
        "review" : "Whenever I hear whatever is told to me, I ask myself if it's true before I believe it. That's my way of the ninja."

    },
    {
        "image" : "<img src='assets/face_5.png'>",
        "name" : "Paloma Patrick",
        "role" : "Adult Entertainer",
        "review" : "You know what's wrong with society? It's that toxic people like Jesse Lopangco are allowed to roam around freely when they don't pay for my services."

    }
]

let currentRev = 0;

const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const random = document.getElementById('random');
 
const p_image = document.querySelector('div.profile-image');
const p_name = document.querySelector('div.name');
const p_role = document.querySelector('div.role');
const p_review = document.querySelector('div.review');

function updateItem(currentRevj){
    p_image.innerHTML = review[currentRev].image
    p_name.textContent = review[currentRev].name
    p_role.textContent = review[currentRev].role
    p_review.textContent = review[currentRev].review
}

const generateRandomBetween = (min, max, exclude) => {
    let ranNum = Math.floor(Math.random() * (max - min)) + min;

    if (ranNum === exclude) {
        ranNum = generateRandomBetween(min,max,exclude);
    }

    return ranNum;
}

window.addEventListener('DOMContentLoaded', function(){
    updateItem(0);
});

prevButton.addEventListener('click', function(){

    if(currentRev == 0)
        currentRev = review.length - 1;
    else
        currentRev--;

    updateItem(currentRev);
});

nextButton.addEventListener('click', function(){

    if(currentRev == review.length - 1)
        currentRev = 0;
    else
        currentRev++;

    updateItem(currentRev);
});

random.addEventListener('click', function(){
    console.log("random");
});
