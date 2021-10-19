console.log("Hello - we run javascript !!");


function myMove(navigator) {
    let elem = document.getElementById("graphic");
    let marginLeftString = elem.style.marginLeft;
    let marginLeftInt = parseInt(marginLeftString, 10);

    if (navigator == 1) {

        // MOVE THE PICTURE LEFT BY 5 PX
        //console.log("Aktuell: " + y);
        marginLeftInt -= 5;
        //console.log("Danach: " + elem.style.marginLeft);

        console.log("picture left pressed");

    } else {

        // MOVE THE PICTURE RIGHT BY 5 PX
        //console.log("Aktuell: " + y);
        marginLeftInt += 5;
        //console.log("Danach: " + elem.style.marginRight);
        console.log("picture right pressed");
    }
    elem.style.marginLeft = marginLeftInt + "px";
}

function aufgabe1() {
    console.log("Hello there");

    let divHeight = document.getElementById('graphic').offsetHeight;
    let divWidth = document.getElementById('graphic').offsetWidth;

    document.getElementById("sec1").innerHTML = "Fenstergröße: " + window.innerWidth + "x" + window.innerHeight +
        " Bildschirmgröße: " + screen.width + "x" + screen.height +
        " Divgröße: " + divHeight + "x" + divWidth;
}

function aufgabe2() {
    let currentURL = window.location.href;

    document.getElementById("sec2").innerHTML = "Die URL ist: " + currentURL;
}

function aufgabe3() {
    window.location.href = document.referrer;
}

function aufgabe4() {
    let readCookie = document.cookie;
    document.getElementById("sec3").innerHTML = readCookie;
}

let count = 0;
function myEnteredText() {
    count++;
    document.getElementById('sec4').innerHTML = count;
};

function aufgabe8() {

}