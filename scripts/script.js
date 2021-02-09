let cards = document.getElementsByClassName("cards");
let about = document.getElementById("about");
let resume = document.getElementById("resume");
let portfolio = document.getElementById("portfolio");
let contact = document.getElementById("contact");

function cardSwitcher(id) {

    for(let i=0; i<cards.length; i++) {
        cards[i].style.display = "none";
    }

    switch(id) {
        case 1:
            about.style.display = "grid";
            break;
        case 2:
            resume.style.display = "grid";
            break;
        case 3:
            portfolio.style.display = "grid";
            break;
        case 4:
            contact.style.display = "grid";
            break;
    }
}