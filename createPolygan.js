let page_x;
let page_y;
document.addEventListener("mousemove", (e) => {
    page_x = e.clientX;
    page_y = e.clientY;
});

function create____polygan(padding = "10", borderWidth = "2", borderStyle = "solid", borderRadius = "100", zIndex = "9999999999", opacityForHide = "600") {
    let body = document.querySelector("#created____polygan");
    let span = document.createElement("span");
    span.style.padding = padding + "px";
    span.style.borderWidth = borderWidth + "px";
    span.style.borderStyle = borderStyle;
    span.style.borderRadius = borderRadius + "%";
    span.style.position = "fixed";
    span.style.zIndex = zIndex;
    setInterval(() => {
        span.style.opacity = "0";
    }, opacityForHide);
    let random = Math.floor(Math.random() * 60);
    if (random === 0) {
        span.style.borderColor = "aqua";
    } else if (random === 1) {
        span.style.borderColor = "lightgreen";
    } else if (random === 2) {
        span.style.borderColor = "orange";
    } else if (random === 3) {
        span.style.borderColor = "cyan";
    } else if (random === 4) {
        span.style.borderColor = "bisque";
    } else if (random === 5) {
        span.style.borderColor = "lightpink";
    } else if (random === 6) {
        span.style.borderColor = "gold";
    } else if (random === 7) {
        span.style.borderColor = "peru";
    } else if (random === 8) {
        span.style.borderColor = "tomato";
    } else if (random === 9) {
        span.style.borderColor = "dodgerblue";
    } else if (random === 10) {
        span.style.borderColor = "mediumorchid";
    } else if (random === 11) {
        span.style.borderColor = "saddlebrown";
    } else if (random === 12) {
        span.style.borderColor = "royalblue";
    } else if (random === 13) {
        span.style.borderColor = "antiquewhite";
    } else if (random === 14) {
        span.style.borderColor = "aquamarine";
    } else if (random === 15) {
        span.style.borderColor = "burlywood";
    } else if (random === 16) {
        span.style.borderColor = "red";
    } else if (random === 17) {
        span.style.borderColor = "green";
    } else if (random === 18) {
        span.style.borderColor = "blue";
    } else if (random === 19) {
        span.style.borderColor = "lightblue";
    } else if (random === 20) {
        span.style.borderColor = "lightcoral";
    } else if (random === 21) {
        span.style.borderColor = "blueviolet";
    } else if (random === 22) {
        span.style.borderColor = "cornsilk";
    } else if (random === 23) {
        span.style.borderColor = "darkgray";
    } else if (random === 24) {
        span.style.borderColor = "crimson";
    } else if (random === 25) {
        span.style.borderColor = "darkseagreen";
    } else if (random === 26) {
        span.style.borderColor = "darkkhaki";
    } else if (random === 27) {
        span.style.borderColor = "lightskyblue";
    } else if (random === 28) {
        span.style.borderColor = "skyblue";
    } else if (random === 29) {
        span.style.borderColor = "indianred";
    } else if (random === 30) {
        span.style.borderColor = "limegreen";
    } else if (random === 31) {
        span.style.borderColor = "navajowhite";
    } else if (random === 32) {
        span.style.borderColor = "plum";
    } else if (random === 33) {
        span.style.borderColor = "tan";
    } else if (random === 34) {
        span.style.borderColor = "powderblue";
    } else if (random === 35) {
        span.style.borderColor = "yellow";
    } else if (random === 36) {
        span.style.borderColor = "papayawhip";
    } else if (random === 37) {
        span.style.borderColor = "sandybrown";
    } else if (random === 38) {
        span.style.borderColor = "olivedrab";
    } else if (random === 39) {
        span.style.borderColor = "darksalmon";
    } else if (random === 40) {
        span.style.borderColor = "rosybrown";
    } else if (random === 41) {
        span.style.borderColor = "khaki";
    } else if (random === 42) {
        span.style.borderColor = "dimgray";
    } else if (random === 43) {
        span.style.borderColor = "mediumvioletred";
    } else if (random === 44) {
        span.style.borderColor = "lightyellow";
    } else if (random === 45) {
        span.style.borderColor = "magenta";
    } else if (random === 46) {
        span.style.borderColor = "goldenrod";
    } else if (random === 47) {
        span.style.borderColor = "mediumpurple";
    } else if (random === 48) {
        span.style.borderColor = "lightgoldenrodyellow";
    } else if (random === 49) {
        span.style.borderColor = "greenyellow";
    } else if (random === 50) {
        span.style.borderColor = "salmon";
    } else if (random === 51) {
        span.style.borderColor = "snow";
    } else if (random === 52) {
        span.style.borderColor = "lightslategray";
    } else if (random === 53) {
        span.style.borderColor = "ivory";
    } else if (random === 54) {
        span.style.borderColor = "wheat";
    } else if (random === 55) {
        span.style.borderColor = "teal";
    } else if (random === 56) {
        span.style.borderColor = "sienna";
    } else if (random === 57) {
        span.style.borderColor = "darkgoldenrod";
    } else if (random === 58) {
        span.style.borderColor = "violet";
    } else if (random === 59) {
        span.style.borderColor = "darkgrey";
    } else if (random === 60) {
        span.style.borderColor = "deeppink";
    }
    span.style.transition = "opacity 1s";
    span.style.top = page_y + "px";
    span.style.left = page_x + "px";
    body.appendChild(span);
    setInterval(() => {
        span.remove();
    }, opacityForHide + 4);
}