const loaded = () => console.log("Sahifa yuklandi");
const sidebar = document.getElementById("sidebar");
const cards = document.getElementById("cards")
const selected = document.getElementById("selected")
const teacher = document.getElementById("teacher")
const student = document.getElementById("student")
const search = document.getElementById("search")
console.log(cards);
const toggleSidebar = () => {
    if (sidebar.classList.contains("hide")) sidebar.classList.remove("hide")
    else sidebar.classList.add("hide")
}
const keyUp = (event) => {
    if (event.key == "Escape") sidebar.classList.add("hide")
}
for (const card of cards.children) {
    console.log(card.children[0]);
    card.children[0].ondblclick = () => {
        const menu = card.children[0].innerHTML;
        console.log(menu);
        selected.innerHTML = menu
    }
}
teacher.onclick = function () {
    if (teacher.innerHTML) alert('Berdiqulov Zafar, He is Math teacher and he lives in Olmazor, Osoyishta street,N60.')
}
student.onclick = function () {
    if (student.innerHTML) alert('Soipov Doniyor, He is student, studies PDP academy and Doniyor lives in Yunusabad, Zarbuloq street, N10 ')
}












// O’qituvchilar sahifasini shakllantiring. Unda o’qituvchilar jadvali bo’lsin.
//  Jadvalda o’qituvchining ismi, familyasi,
//  fani va “manzilni ko’rsat” nomli funksiya bo’lsin. 
//  Bu knopkaga bosilganda, o’qituvchining manzili alertda chiqsin.