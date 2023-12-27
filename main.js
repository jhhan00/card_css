console.log('css coding~');

var container1 = document.querySelector(".container1");
container1.addEventListener("mousemove", function(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    const rotateX = y * 4 / 30 - 20;
    const rotateY = -x / 5 + 20;

    container1.style = `transform : perspective(300px)
        rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container1.addEventListener("mouseout", function() {
    container1.style = `transform: perspective(300px)
        rotateX(0deg) rotateY(0deg)`;
});

var overlay1 = document.querySelector(".overlay1");
overlay1.addEventListener("mousemove", function(e) {
    const x = e.offsetX;
    const y = e.offsetY;

    overlay1.style = `background-position: ${x/5 + y/6}%`;
});

overlay1.addEventListener("mouseout", function() {
    overlay1.style = `filter: opacity(0)`;
});