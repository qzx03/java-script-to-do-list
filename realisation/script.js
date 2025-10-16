let NIN;
const input = document.getElementById("NLI");
const btn = document.getElementById("create");
let x = 0;
let obj = {};
let lbl = {};
const RS = document.getElementById("RS");
const SA = document.getElementById("SA");
const UA = document.getElementById("UA");
const CcontM = document.getElementById("Ccont");



input.oninput = function() {
    NIN = input.value
}

btn.onclick = function(e) {
    e.preventDefault();
    let Cn = "C" + x
    obj[Cn] = document.createElement("input");
    lbl[Cn] = document.createElement("label");
    obj[Cn].type = "checkbox";
    obj[Cn].id = Cn;
    lbl[Cn].htmlFor = Cn;
    lbl[Cn].textContent = NIN;
    const row = document.createElement("div");
row.className = "item-row";
row.appendChild(obj[Cn]);
row.appendChild(lbl[Cn]);
document.getElementById("Ccont").appendChild(row);

    x++
    input.value = "";
    update();
}
RS.onclick = function() {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');
    checked.forEach(box => {
         const row = box.parentElement;
        row.remove();
        const Clbl = document.querySelectorAll(`label[for="${box.id}"]`)
        box.remove();
        Clbl.forEach(oneL =>{
            oneL.remove();
        })
    });
    update();
}
SA.onclick = function() {
    document.querySelectorAll('input[type="checkbox"]').forEach(oneC =>{
        oneC.checked = true;
    })
    update();
}
UA.onclick = function() {
    document.querySelectorAll('input[type="checkbox"]').forEach(oneK =>{
        oneK.checked = false;
    })
    update();
}
function update(){
    const CCC = document.getElementById("CCC");
const maxC = document.getElementById("maxC");


maxC.textContent = document.querySelectorAll('input[type="checkbox"]').length;
CCC.textContent = document.querySelectorAll('input[type="checkbox"]:checked').length;
}


CcontM.addEventListener("change", function(e) {
    if (e.target && e.target.type === "checkbox") {
        update();
    }
});