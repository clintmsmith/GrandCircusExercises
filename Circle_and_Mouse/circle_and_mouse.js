let myDiv = document.getElementById("my-div");

const move = (e) => {
    var x = e.pageX;
    var y = e.pageY;
    myDiv.style.left = x + "px";
    myDiv.style.top = y + "px";
};

document.addEventListener('mousemove', (e) => {
    move(e);
});

myDiv.addEventListener('click', () => {
    // If you comment out these two lines, then the psuedo class 'active' works as plannned
    myDiv.innerText = "Clicked Off";
    myDiv.style.backgroundColor = "red";

    window.setTimeout(() => {
        myDiv.innerText = `Click (and hold)`;
        myDiv.style.backgroundColor = "lightpink";
        // If you comment out the two lines below, then the psuedo class 'active' works as plannned
        myDiv.style.width = 85;
        myDiv.style.height = 85;
    }, 2000);
});