// Switching cards and animations
let cards = document.getElementsByClassName("cards");
let card = document.getElementsByClassName("card");
let about = document.getElementById("about");
let resume = document.getElementById("resume");
let portfolio = document.getElementById("portfolio");
let contact = document.getElementById("contact");
let active = 1;
let last = 1

function cardSwitcher(id) {
    if (active != id) {
        cards[id-1].style.zIndex = "0";
        switch(id) {
            case 1:
                active = id;
                about.style.zIndex = "1";
                cardAnimate(0, 1, id);
                break;
            case 2:
                active = id;
                resume.style.zIndex = "1";
                cardAnimate(2, 3, id);
                break;
            case 3:
                active = id;
                portfolio.style.zIndex = "1";
                cardAnimate(4, 5, id);
                break;
            case 4:
                active = id;
                contact.style.zIndex = "1";
                cardAnimate(6, 7, id);
                break;
        }
    }
}

function cardAnimate(text, photo, id) {
    card[text].animate([
        { left: '-50%'},
        { left: 0 }
    ], {
        duration: 2000,
        iterations: 1,
        direction: 'alternate',
        fill: 'forwards'
    });

    card[photo].animate([
        { right: '-50%'},
        { right: 0 }
    ], {
        duration: 2000,
        iterations: 1,
        direction: 'alternate',
        fill: 'forwards'
    });

    for(let i=0; i<cards.length; i++) {
        if (i+1 != id) {
            cards[i].style.zIndex = "-1";
        }
        if (i+1 == last) {
            cards[last-1].style.zIndex = "0";
        }
    }
    console.log(last);
    last = id
}

//Portfolio card scripts
let management = document.getElementById("management");
let projectInfo = document.getElementById("project-info");
let closeInfo = document.getElementById("close");

management.addEventListener("click", function () {
    projectInfo.style.display = "block";
});

closeInfo.addEventListener("click", function () {
    projectInfo.style.display = "none";
});


// Contact card scripts
const textarea = document.getElementById("textarea");
let lastLength = 0;

textarea.addEventListener('input', function (e) {
    const target = e.target;
    let length = target.value.length;

    if (length % 65 == 0 && length > 0 && length > lastLength) {
        lastLength = length
        target.style.height = (25+target.scrollHeight)+"px";
    } else if (length % 65 == 0 && length <= lastLength && target.offsetHeight != 52) {
        lastLength = length
        target.style.height = (-25+target.scrollHeight)+"px";
    }
});