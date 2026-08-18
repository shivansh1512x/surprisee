const sections = [
    "intro",
    "envelopeScreen",
    "birthday",
    "memories",
    "wishes",
    "final",
    "letter"
];

const wishData = [
    {
        icon: "🌸",
        title: "Happiness",
        text: "Bas tumhari smile hamesha bani rahe. Life kitni bhi busy ho, khushi ke liye chhoti chhoti reasons milti rahein."
    },
    {
        icon: "✨",
        title: "Dreams",
        text: "Jo bhi dreams tumhare dil mein hain, unke liye tumhe courage bhi mile aur unhe poora karne ke beautiful moments bhi."
    },
    {
        icon: "🌷",
        title: "Peace",
        text: "Dil ko woh sukoon mile jahan unnecessary worries ki jagah thodi aur peace, thodi aur positivity ho."
    },
    {
        icon: "♡",
        title: "Love",
        text: "Tumhare aas paas hamesha genuine log, genuine smiles aur woh warmth rahe jo life ko aur beautiful bana deti hai."
    }
];

function hideAllSections() {
    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.remove("active");
        }
    });
}

function showSection(id) {
    hideAllSections();

    const element = document.getElementById(id);

    if (element) {
        element.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if (id === "birthday") {
        createHearts();
        createConfetti();
    }
}

function openEnvelope() {
    showSection("envelopeScreen");
}

function openLetter() {
    const wrap = document.querySelector(".envelope-wrap");

    wrap.classList.add("open");

    setTimeout(() => {
        showSection("birthday");
    }, 1000);
}

function showWish(index) {
    const data = wishData[index];

    document.getElementById("wishIcon").textContent = data.icon;
    document.getElementById("wishTitle").textContent = data.title;
    document.getElementById("wishText").textContent = data.text;

    document.getElementById("wishPopup").classList.add("show");
}

function closeWish() {
    document.getElementById("wishPopup").classList.remove("show");
}

document.getElementById("wishPopup").addEventListener("click", function (event) {
    if (event.target === this) {
        closeWish();
    }
});

function createHearts() {
    const container = document.getElementById("hearts");

    if (!container || container.dataset.created) return;

    container.dataset.created = "true";

    for (let i = 0; i < 18; i++) {
        const heart = document.createElement("span");

        heart.textContent = Math.random() > .5 ? "♡" : "♥";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (10 + Math.random() * 15) + "px";
        heart.style.animationDuration = (5 + Math.random() * 6) + "s";
        heart.style.animationDelay = Math.random() * 3 + "s";

        container.appendChild(heart);
    }
}

function createConfetti() {
    const container = document.getElementById("confetti");

    if (!container || container.dataset.created) return;

    container.dataset.created = "true";

    for (let i = 0; i < 60; i++) {
        const piece = document.createElement("span");

        piece.style.left = Math.random() * 100 + "%";
        piece.style.animationDelay = Math.random() * 1.5 + "s";
        piece.style.animationDuration = (2.5 + Math.random() * 2) + "s";

        container.appendChild(piece);
    }
}


/*
=========================================
IMAGE SAFETY

If a wrong image name is used, we keep
the card clean instead of showing a broken
image icon.
=========================================
*/

document.querySelectorAll(".photo img").forEach(img => {
    img.addEventListener("error", () => {
        img.style.display = "none";
        img.parentElement.classList.add("image-missing");
    });
});


/*
ESC closes popup
*/

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeWish();
    }
});
