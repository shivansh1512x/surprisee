/* =====================================
   PERSONAL DETAILS
===================================== */

const person = {
    name: "Beautiful Soul",

    birthdayMessage:
        "Today isn't just another day. It's a reminder of how lucky the world is to have someone as wonderful as you.",

    letterName:
        "My Dear",

    finalMessage:
        "I hope this little website made you smile. But there's still one last thing..."
};


/* =====================================
   FLOWER WISHES
===================================== */

const wishes = [

    {
        flower: "🌹",
        title: "A Wish For Love",
        text:
            "May you always be surrounded by genuine love — the kind that makes you feel safe, valued and truly understood."
    },

    {
        flower: "🌻",
        title: "A Wish For Happiness",
        text:
            "May your days be filled with little reasons to smile, unexpected moments of joy and memories that make your heart happy."
    },

    {
        flower: "🌷",
        title: "A Wish For Your Dreams",
        text:
            "May every dream you've been quietly working towards come closer to reality. Never stop believing in yourself."
    },

    {
        flower: "🌸",
        title: "A Little Magic",
        text:
            "May this new chapter of your life be full of beautiful surprises, unforgettable moments and a little bit of magic."
    }

];


/* =====================================
   INITIALIZE
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("personName").textContent =
        person.name;

    document.getElementById("finalName").textContent =
        person.name;

    document.getElementById("birthday").querySelector(
        ".birthday-message"
    ).textContent = person.birthdayMessage;

    createBackgroundHearts();

});


/* =====================================
   ENVELOPE
===================================== */

function openEnvelope() {

    document.getElementById("intro").classList.remove("active");

    document
        .getElementById("envelopeScreen")
        .classList.add("active");

}


function openLetter() {

    const envelope =
        document.querySelector(".envelope-wrapper");

    envelope.classList.add("open");

    setTimeout(() => {

        document
            .getElementById("envelopeScreen")
            .classList.remove("active");

        document
            .getElementById("birthday")
            .classList.add("active");

        createHearts(20);

    }, 1000);

}


/* =====================================
   SHOW SECTION
===================================== */

function showSection(sectionId) {

    document.querySelectorAll(".screen").forEach(section => {
        section.classList.remove("active");
    });

    document.querySelectorAll(".content-section").forEach(section => {
        section.classList.remove("active");
    });

    const section = document.getElementById(sectionId);

    if (!section) return;

    section.classList.add("active");

    requestAnimationFrame(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    createHearts(5);
}


/* =====================================
   FLOWER WISH
===================================== */

function showWish(index) {

    const wish = wishes[index];

    document.getElementById("popupFlower").textContent =
        wish.flower;

    document.getElementById("popupTitle").textContent =
        wish.title;

    document.getElementById("popupText").textContent =
        wish.text;

    document
        .getElementById("wishPopup")
        .classList.add("show");

    createHearts(10);
}


function closeWish() {

    document
        .getElementById("wishPopup")
        .classList.remove("show");

}


/* =====================================
   FINAL LETTER
===================================== */

function openFinalLetter() {

    document
        .querySelectorAll(".screen")
        .forEach(section => {
            section.classList.remove("active");
        });

    document
        .querySelectorAll(".content-section")
        .forEach(section => {
            section.classList.remove("active");
        });

    document
        .getElementById("finalLetter")
        .classList.add("active");

    createConfetti(100);
    createHearts(30);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================
   BACKGROUND HEARTS
===================================== */

function createBackgroundHearts(amount = 1) {

    const container =
        document.getElementById("hearts");

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("span");

        heart.innerHTML =
            Math.random() > .5 ? "♡" : "✦";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (10 + Math.random() * 20) + "px";

        heart.style.animationDuration =
            (7 + Math.random() * 7) + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 15000);
    }
}


setInterval(() => {

    createBackgroundHearts(1);

}, 1300);


/* =====================================
   HEART BURST
===================================== */

function createHearts(amount = 10) {

    const container =
        document.getElementById("hearts");

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("span");

        heart.innerHTML =
            Math.random() > .5 ? "💗" : "♡";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (12 + Math.random() * 20) + "px";

        heart.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
}


/* =====================================
   CONFETTI
===================================== */

function createConfetti(amount = 70) {

    const container =
        document.getElementById("confetti");

    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("span");

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5000);
    }
}


/* =====================================
   RESTART
===================================== */

function restart() {

    document
        .getElementById("finalLetter")
        .classList.remove("active");

    document
        .getElementById("intro")
        .classList.add("active");

    document
        .querySelector(".envelope-wrapper")
        .classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
