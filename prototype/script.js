const F1 = document.getElementById("F1");
const CB = document.querySelectorAll('input[type="checkbox"]');

let TF = JSON.parse(localStorage.getItem("key")) || [];

reload();

CB.forEach(Box =>{
    Box.addEventListener("change", display);
})

function display(){
    CB.forEach((E, i) =>{
        if (E.checked){
            TF[i] = true;
        } else {
            TF[i] = false
        }
        localStorage.setItem("key", JSON.stringify(TF));
    })
}
function reload(){
    CB.forEach((element, i) => {
       element.checked = TF[i];
    });
}