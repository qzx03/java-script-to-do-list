const F1 = document.getElementById("F1");
const CB = document.querySelectorAll('input[type="checkbox"]');

CB.forEach(check => {
    check.addEventListener("change", function(){
        const CBC = document.querySelectorAll('input[type="checkbox"]:checked');
        F1.textContent = CBC.length;
    })
})