const welcome = document.getElementById("welcome");
const giftPage = document.getElementById("giftPage");
const cakePage = document.getElementById("cakePage");
const wishPage = document.getElementById("wishPage");
const letterPage = document.getElementById("letterPage");

const giftBtn = document.getElementById("giftBtn");
const blowBtn = document.getElementById("blowBtn");
const wishBtn = document.getElementById("wishBtn");

const typing = document.getElementById("typing");
const flame = document.getElementById("flame");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

// Tombol buka hadiah
giftBtn.onclick = () => {

    welcome.classList.add("hidden");
    giftPage.classList.remove("hidden");

    if (bgMusic) {
        bgMusic.play().catch(() => {});
    }

    setTimeout(() => {
        giftPage.classList.add("hidden");
        cakePage.classList.remove("hidden");
    }, 2500);
};

// Tiup lilin
blowBtn.onclick = () => {

    flame.style.opacity = "0";

    setTimeout(() => {
        cakePage.classList.add("hidden");
        wishPage.classList.remove("hidden");
    }, 1500);

};

// Wish Done
wishBtn.onclick = () => {

    wishPage.classList.add("hidden");
    letterPage.classList.remove("hidden");

    i = 0;
    typeMessage();

};

// Tombol musik
musicBtn.onclick = () => {

    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.innerHTML = "⏸️ Pause Musik";
    } else {
        bgMusic.pause();
        musicBtn.innerHTML = "🎵 Putar Musik";
    }

};

const message = `Hallooo Dedee, Happy Birthday yaa! 🥳🎂💛

Hari ini waktu kembali menitipkan satu angka baru di usiamu. 
Semoga angka itu bukan sekedar tentang bertambahnya usia, 
tapi tentang semakin banyak hal yang akhirnya kamu mengerti bahwa tidak semua yang pergi adalah kehilangan,
tidak semua yang tertunda adalah kegagalan,
dan tidak semua jalan yang berbelok berarti kamu tersesat.
Semoga langkahmu di usia ini menemukan banyak persinggahan yang baik.
Semoga yang patah perlahan pulih, yang hilang diganti dengan sesuatu yang lebih berarti
dan yang sedang kamu perjuangkan akhirnya menemukan jalan pulang kepadamu.
Tetaplah jadi Nadia yang punya caranya sendiri untuk tetap bersinar.
Tak perlu paling terang, asal cukup untuk menerangi jalanmu sendiri.

Selamat bertambah usia. Semoga sehat selalu dan panjang umur.
Salam manis dari kaka AWOKAWOKAOWK`;

let i = 0;

function typeMessage() {

    typing.innerHTML = "";

    const interval = setInterval(() => {

        typing.innerHTML += message.charAt(i);
        i++;

        if (i >= message.length) {
            clearInterval(interval);
        }

    }, 40);

}
