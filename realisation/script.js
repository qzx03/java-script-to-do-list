let NIN;
const input = document.getElementById("NLI");
const btn = document.getElementById("Add");
let x = 0;
let obj = {};
let lbl = {};
const RS = document.getElementById("RS");
const SA = document.getElementById("SA");
const UA = document.getElementById("UA");
const CcontM = document.getElementById("Ccont");
load()



input.oninput = function() {
    NIN = input.value
    save();
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
    save();
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
    save();
}
SA.onclick = function() {
    document.querySelectorAll('input[type="checkbox"]').forEach(oneC =>{
        oneC.checked = true;
    })
    update();
    save();
}
UA.onclick = function() {
    document.querySelectorAll('input[type="checkbox"]').forEach(oneK =>{
        oneK.checked = false;
    })
    update();
    save();
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
        save();
    }
});

function save(){
     const data = [];
    document.querySelectorAll('#Ccont .item-row').forEach(row => {
        const checkbox = row.querySelector('input[type="checkbox"]');
        const label = row.querySelector('label');
        data.push({
            text: label.textContent,
            checked: checkbox.checked
        });
    });
    localStorage.setItem("key", JSON.stringify(data));
}
function load(){
    const saved = JSON.parse(localStorage.getItem("key") || "[]");
    CcontM.innerHTML = "";
    x = 0;
    saved.forEach(item => {
        const Cn = "C" + x;
        const checkbox = document.createElement("input");
        const label = document.createElement("label");
        const row = document.createElement("div");

        checkbox.type = "checkbox";
        checkbox.id = Cn;
        checkbox.checked = item.checked;
        label.htmlFor = Cn;
        label.textContent = item.text;

        row.className = "item-row";
        row.appendChild(checkbox);
        row.appendChild(label);
        CcontM.appendChild(row);

        x++;
    });
    update();
}
load();

console.log("hello world");