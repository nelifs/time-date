function change() {
    let time = document.getElementById("transition1")
    let date = document.getElementById("transition2")
    let ch = "time"
    if(ch == "time") {
        ch = "date"
        date.classList.toggle("on")
        time.classList.toggle("off")
    } if(ch == "date") {
        ch = "time"
    }
}