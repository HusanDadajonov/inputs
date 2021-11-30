let elForm = document.querySelector(".form");
let elInpName = document.querySelector(".name");
let elInpSurname = document.querySelector(".surame");
let elInpAge = document.querySelector(".age");
let elInpPasport = document.querySelector(".passport");
let elInpDollar = document.querySelector(".dollars");
let elPrintName = document.querySelector(".name-surname");
let elPrintAge = document.querySelector(".printage");
let elPrintPasport = document.querySelector(".print-pasport");
let elPrintDollar = document.querySelector(".printdollar");
let elPrintSom = document.querySelector(".printsom");
let user = {};

elForm.addEventListener("submit", func);

function func(e){
    e.preventDefault();
    let userName = user.name = elInpName.value;
    let surName = user.surname = elInpSurname.value;
    let age = user.age = elInpAge.value;
    let passport = user.passport = elInpPasport.value;
    let som = user.som = elInpDollar.value;
    let dollar = user.dollar = elInpDollar.value * 31;

    elPrintName.append(userName);
    elPrintAge.append(age);
    elPrintPasport.append(passport);
    elPrintDollar.append(dollar);
    elPrintSom.append(som);

    console.log(user);
}