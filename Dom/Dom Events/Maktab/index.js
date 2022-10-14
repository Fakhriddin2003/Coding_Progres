const loaded = () => console.log("Sahifa yuklandi");
const sidebar = document.getElementById("sidebar");
const cards = document.getElementById("cards")
const selected = document.getElementById("selected")
const teacher = document.getElementById("teacher")

const search = document.getElementById("search")
console.log(cards);
const toggleSidebar = () => {
    if (sidebar.classList.contains("hide")) sidebar.classList.remove("hide")
    else sidebar.classList.add("hide")
}
const keyUp = (event) => {
    if (event.key == "Escape") sidebar.classList.add("hide")
}
// Bo'limlarni shakillantirish
const sections = [{
        title: "O'qituvchilar",
        link: "#"
    },
    {
        title: "O'quvchilar",
        link: "#"
    },
    {
        title: "Hodimlar",
        link: "#"
    },
    {
        title: "Fanlar",
        link: "#"
    },
    {
        title: "Xonalar",
        link: "#"
    },
    {
        title: "Dars Jadvallari",
        link: "#"
    },
    {
        title: "Sinflar",
        link: "#"
    }
];

// const setCards = () => {
//     cards.innerHTML = "";
//     sections.map((section) => {
//         console.log(section);

//         const col = document.createElement("div")
//         col.className = "col-md-6 col-lg-4 mb-3";

//         const link = document.createElement("a")
//         link.href = section.link;
//         link.innerHTML = section.title;
//         col.appendChild(link)
//         cards.appendChild(col)
//     })
// }
// setCards();
for (const card of cards.children) {
    console.log(card.children[0]);
    card.children[0].ondblclick = () => {
        const menu = card.children[0].innerHTML;
        console.log(menu);
        selected.innerHTML = menu
    }
}

function darkMode() {
    const header = document.getElementById("header").style.background = "#30363d"
    const sidebar = document.getElementById("sidebar").style.background = "#30363d"
    const content = document.getElementById("content").style.background = "#30363d"
    const text = document.getElementById("text").style.color = "white"
    const btn = document.getElementById("btn").style.color = "white"
}

function whiteMode() {
    const header = document.getElementById("header").style.background = "rgb(213, 219, 219)"
    const sidebar = document.getElementById("sidebar").style.background = "linear-gradient(to right top, #99aca0, #8ea4b9)"
    const content = document.getElementById("content").style.background = "#f3e7e7"
    const text = document.getElementById("text").style.color = "black"
    const btn = document.getElementById("btn").style.color = "black"
}









// O’qituvchilar sahifasini shakllantiring. Unda o’qituvchilar jadvali bo’lsin.
//  Jadvalda o’qituvchining ismi, familyasi,
//  fani va “manzilni ko’rsat” nomli funksiya bo’lsin. 
//  Bu knopkaga bosilganda, o’qituvchining manzili alertda chiqsin.