
let a = [1, 2,21,2412,352,564,567,5,2,3,10,12,23];
let answer = a.length % 2 === 0;
if (answer) {
    let i = a.length / 2;
    console.log((a[i - 1] + a[i]) / 2)
} else {
    console.log(a[Math.ceil(a.length / 2) - 1]);
}

