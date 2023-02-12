let x = 5;
for (let i = 1; i <= x; i++) {
  for (let j = 1; j <= x; j++) {
    document.write(`<span class="a01">${j}</span>`);
  }
  document.write("<br/>");
}

document.write("..........................");
document.write("<br/>");

let y = 5;
for (let i = 1; i <= y; i++) {
  for (let j = 1; j <= y; j++) {
    if (i === j) {
      document.write(`<span class="a02">1</span>`);
    } else {
      document.write(`<span class="a07">0</span>`);
    }
  }
  document.write("<br/>");
}

document.write("..........................");
document.write("<br/>");

let z = 5;
for (let i = 1; i <= z; i++) {
  for (let j = 1; j <= z; j++) {
    if (i <= j) {
      document.write(`<span class="a03">1</span>`);
    } else {
      document.write(`<span class="a04">0</span>`);
    }
  }
  document.write("<br/>");
}

document.write("..........................");
document.write("<br/>");

let f = 5;
for (let i = 1; i <= f; i++) {
  for (let j = 1; j <= f; j++) {
    if (i >= j) {
      document.write(`<span class="a04">1</span>`);
    } else {
      document.write(`<span class="a07">0</span>`);
    }
  }
  document.write("<br/>");
}

document.write("..........................");
document.write("<br/>");

let p = 8;
for (let k = 1; k <= p; k++) {
  document.write(`<div class="aa" style='
      left:calc(50% - ${k * 5}px);
      top:calc(50% + ${k * 5}px);
    '>`);
  for (let i = 1; i <= p; i++) {
    for (let j = 1; j <= f; j++) {
      if (i >= j) {
        document.write(
          `<span class="zarb" style='background-color:rgb(${30 * j},${30 * j},${
            40 * j
          })'>1</span>`
        );
      } else {
        document.write(
          `<span class="zarb" style='background-color:rgb(${20 * j},${20 * j},${
            30 * j
          })'>0</span>`
        );
      }
    }
    document.write("<br/>");
  }
  document.write("</div>");
}

function negnegprint() {
  let b = 10;
  for (let i = 1; i <= b; i++) {
    for (let j = 1; j <= b; j++) {
      let w = i * j;
      document.write(`<span class="a05">${w}</span>`);
    }
    document.write("<br/>");
  }
}

negnegprint();


document.write("..........................");
document.write("<br/>");

function test(q){
    if (q%2===0){
        document.write("even")
    }else{
        document.write("odd")
    }
}
let q=Number(prompt("NUMBER.....!")) 
test(q)
document.write("<br/>");
document.write("..........................");
document.write("<br/>");

function salary(fullName, tax, perHore, degree) {
  let salarypure;
  let taxsalary;
  let salary;
  if (degree === "phd") {
    salarypure = perHore * 100000;
    taxsalary = perHore * 100000 * tax;
    salary = salarypure - taxsalary;
  } else if (degree === "master") {
    salarypure = perHore * 80000;
    taxsalary = perHore * 80000 * tax;
    salary = salarypure - taxsalary;
  } else if (degree === "bachelor") {
    salarypure = perHore * 50000;
    taxsalary = perHore * 50000 * tax;
    salary = salarypure - taxsalary;
  } else if (degree === "hidiploma") {
    salarypure = perHore * 40000;
    taxsalary = perHore * 40000 * tax;
    salary = salarypure - taxsalary;
  } else {
    salarypure = perHore * 30000;
    taxsalary = perHore * 30000 * tax;
    salary = salarypure - taxsalary;
  }
  document.write(`salarypure:${salarypure}  taxsalary:${taxsalary} salary:${salary} `);
}
let fullName = prompt("fullname....!");
let tax = Number(prompt("tax....!")) / 100;
let perHore = Number(prompt("perHore.....!"));
let degree = prompt("degree....! phd master bachelor hidiploma diploma");

salary(fullName, tax, perHore, degree);

document.write("<br/>");
document.write("..........................");
document.write("<br/>");

 function aval(r){
let flag=0
for (let i=1;i<=r;i++){
    if(r%i===0){
        flag++
        console.log(i);
    }
}
if (flag===2){
    console.log(`prime-${r}`);
}else{
    console.log(`notprime-${r}`);
}
}
/* let r=Number(prompt("r...!")) */
aval(19)
console.log(".....................................");
aval(26)
console.log(".....................................");

function mul(u){
    let mul=1
    for(let i=1;i<=u;i++){
        mul*=i
    }
    console.log(mul);
}
mul(15)

function matris(o){
    for (let i = 1; i <= o; i++) {
        for (let j = 1; j <= o; j++) {
          document.write(`<span class="a06">${i}</span>`);
        }
        document.write("<br/>");
      }
}
/* let o=Number(prompt("o....!")) */
matris(8) 