const endDate = "1 january 2023 12:20:00 PM"

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelector("input");
console.log(inputs);
//const clock = () => {

//}

function clock() {
    const end = new Date(endDate)

    const now = new Date()
    const diff = (end - now) / 1000;

if (diff < 0) return;

let day = document.getElementById("day");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

//convert into days;
day.value = Math.floor(diff / 3600 /24);
hour.value = Math.floor(diff / 3600 ) % 24;
min.value = Math.floor(diff / 60 ) % 60;
sec.value = Math.floor(diff ) % 60;
}

//initial call
clock()

//1day=24 hours
//1hr=60 minutes
//60 minutes = 3600 sec

setInterval(
    () => {
        clock()
    },
    1000
)