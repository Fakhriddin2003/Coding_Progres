// let fi = " I am Fakhriddin"
// console.log(fi);
// let str = "Programming languages: c++, c,  javascript"
// console.log((str.indexOf("phyton") === -1 && "incorrect") || "correct");
// console.log(str.startsWith("Program"));
// console.log(str.endsWith("script"));

// console.log(str.slice(6,9));
// console.log(str.substring(6,9));
// console.log(str.substr(6,3));

// function getYear (){
//     return 2003;
// }
// let ism = "fakhriddin";
// let fam = "abdullajonov";
// console.log(`Assalomu alekum ${ism} ${fam} ${getYear()}!`);

// let s = " Temur     ";
// s = s.trim()
// console.log(s.trimStart());

// console.log(s);
// console.log(s.length);
// console.log(s.includes("Temur"));

// let str = "joHN";
// str = str.trim();
// str = str.toLowerCase();
// str = str[0].toUpperCase() + str.slice(1)
// console.log(str);
// console.log(str.replace(/1/g, "+"));
// let a = "lorem ipsum edpwd wfje kqef"
// let count = 1
// for (let i = 0; i < a.length - 1; i++) {
//     if (a[i] !== " " && a[i + 1] === " ") count++
// }
// console.log(count);

// console.log(eval("10 *10 + 2"));
// console.log(10 * 10 + 2);


// const code = `
// function theEnd(str, front) {
//     return (front ) ? str[1] : str.slice(-1)
// }
// `;

// eval(code);
// console.log(theEnd("java", "true"));




// String berilgan bo'lsa, agar birinchi yoki oxirgi belgilar "x" bo'lsa, ushbu "x" belgilarsiz qatorni qaytaring va aks holda satrni o'zgarishsiz qaytaring.

// namunalar

// withoutX('xHix') → Hi
// withoutX('xHi') → Hi
// withoutX('Hxix') → Hxi


// let withoutX = "Hxix";

// if (withoutX.startsWith("x")) {
//     console.log(withoutX.slice(1, 3));
// } else console.log(withoutX.slice(0, 3));




// String berilgan, stringni birinchi 2 ta harfini 3ta nusxasini qaytaring

// namuna:
// extraFront('Hello') → HeHeHe
// extraFront('ab') → ababab

 
// let str =  "Fakhriddin";
//  let multiStar = str.slice(0,2)
//  console.log(multiStar.repeat(3));

// let a = [199,25,212,4,5,6,21222,343,4,54,336,5,6,345,2,424];
// let b = Math.min(...a);
// let c = Math.max(...a)
// console.log(b,c);

// function test(a) {
    
// }



// Berilgan satrning istalgan joyida "hi" so'zi nechta bo'lsa shu sonni qaytaring

// namuna:
// countHi('ABChi hi') → 2
// countHi('hihi') → 2

// let a = " cat  dog"
// if(a.startsWith("cat dog")){
// console.log(true);
// }else console.log(false);



// Berilgan satrning istalgan joyida "hi" so'zi nechta bo'lsa shu sonni qaytaring

// namuna:
// countHi('ABChi hi') → 2
// countHi('hihi') → 2




// let str = ("hiskskdskshi")

// let count = (str.match(/hi/g) || []).length;
// console.log(count);
    