var hour = document.querySelector("#hour");
var minute = document.querySelector("#minute");
var second = document.querySelector("#second");

function tikTak(){
    var saat = new Date().getHours();
    var dakika = new Date().getMinutes();
    var saniye = new Date().getSeconds();

    hour.innerHTML = saat < 10 ? "0" + saat : saat;
    minute.innerHTML = dakika < 10 ? "0" + dakika : dakika;
    second.textContent = saniye < 10 ? "0" + saniye : saniye;
}
var interval = setInterval(tikTak,1000);