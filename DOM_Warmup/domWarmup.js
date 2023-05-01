// Item 1 - DIV background color changes when clicked
const divHere = document.querySelector('.divHere');

divHere.addEventListener('click', () => {
    divHere.classList.add("clicked");    
});


// Item 2 - P element disappears
const disappear = document.querySelector('.disappear');

disappear.addEventListener('click', () => {
    disappear.classList.add("hidden");
});


// Item 3 - P element "Bye" changes to "Hi" with mouse over
const byeHi = document.querySelector('.bye');

byeHi.addEventListener('mouseenter', () => {
    byeHi.innerHTML = `<p>Hi!</p>`
});

byeHi.addEventListener('mouseleave', () => {
    byeHi.innerHTML = `<p>Bye!</p>`
});


// Item 4 - Digital Clock with Hours, Minutes, Seconds
function showTime () {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if(h === 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session;
    document.querySelector('.digitalClock').textContent = time;

    setTimeout(showTime, 1000);
}

showTime();