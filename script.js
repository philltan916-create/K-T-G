
const cats = [
    {
        name: "Jeremy",
        quote: "Please stop looking at your phone and pet me.",
        img: "cat1.jpg"
    },
    {
        name: "Mittens",
        quote: "I sleep on your keyboard when you work.",
        img: "cat2.jpg"
    },
    {
        name: "Whiskers",
        quote: "I knocked over your cup but it's okay, love me.",
        img: "cat3.jpg"
    }
];

function displayCatOfTheWeek() {
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    document.getElementById("cat-img").src = randomCat.img;
    document.getElementById("cat-quote").textContent = randomCat.quote;
    document.getElementById("cat-name").textContent = `– ${randomCat.name}`;
}

const button = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

button.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});


window.onload = displayCatOfTheWeek;
