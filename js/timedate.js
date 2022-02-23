function date() {

let now = new Date()
let hour = now.getHours()
let minute = now.getMinutes()
let second = now.getSeconds()

minute = (minute < 10) ? '0' + minute : minute;
second = (second < 10) ? '0' + second : second;
hour = (hour < 10) ? '0' + hour : hour;

document.getElementById("time").innerHTML = `${hour + ':' + minute + ':' + second}`
document.getElementById("date").innerHTML = `${now.toLocaleDateString()}`
}

date()
setInterval(function(){date()}, 10)