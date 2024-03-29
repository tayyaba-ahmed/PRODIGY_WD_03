let a = document.getElementsByClassName("col");
let Btn1 = document.getElementById("btn1");
let statement = document.getElementById("div2");
let b = false;
let c = 0;
let player = "X"
let finish = true;
let yay = false;
function startgame() {
    if (Btn1.value === "Play!") {
        Btn1.value = "Reset";
        f1();
    } else if (Btn1.value === "Reset") {
        Btn1.value = "Play!"
        for (let i = 0; i < a.length; i++) {
            a[i].innerHTML = ""
        }
        statement.innerHTML = ""
        c = 0;
        b = false;
        finish = true;
        yay = false;
    }
}
function f1() {
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener("click", function haha() {
            if (finish) {
                if (Btn1.value === "Reset") {
                    if (this.innerHTML === "" && !b) {
                        player = "X";
                        this.innerHTML = player;
                        b = true;
                        c++;
                        f2();
                    } else if (this.innerHTML === "" && b) {
                        player = "O";
                        this.innerHTML = player
                        b = false;
                        c++;
                        f2();
                    }
                    if (c === 9 && !yay) {
                        a[i].removeEventListener("click", haha);
                        statement.innerHTML = "Draw!"
                    }
                    if (statement.innerHTML === player + " is Winner!") {
                        a[i].removeEventListener("click", haha);
                        finish = false;
                    }
                }

            }
        })
    }
}
function f2() {
    for (let i = 0; i < a.length; i++) {
        if (a[i].innerHTML !== "") {
            if (a[0].innerHTML === a[1].innerHTML && a[1].innerHTML === a[2].innerHTML) {
                if (a[0].innerHTML !== "" && a[1].innerHTML !== "" && a[2].innerHTML !== "") {
                    yay = true;
                    statement.innerHTML = player + " is Winner!";
                }
            }
            if (a[3].innerHTML === a[4].innerHTML && a[4].innerHTML === a[5].innerHTML) {
                if (a[3].innerHTML !== "" && a[4].innerHTML !== "" && a[5].innerHTML !== "") {
                    yay = true;
                    statement.innerHTML = player + " is Winner!";
                }
            }
            if (a[6].innerHTML === a[7].innerHTML && a[7].innerHTML === a[8].innerHTML) {
                if (a[6].innerHTML !== "" && a[7].innerHTML !== "" && a[8].innerHTML !== "") {
                    yay = true;
                    statement.innerHTML = player + " is Winner!";
                }
            }
            if (a[0].innerHTML === a[3].innerHTML && a[3].innerHTML === a[6].innerHTML) {
                if (a[0].innerHTML !== "" && a[3].innerHTML !== "" && a[6].innerHTML !== "") {
                    yay = true;
                    statement.innerHTML = player + " is Winner!";
                }
            }
            if (a[1].innerHTML === a[4].innerHTML && a[4].innerHTML === a[7].innerHTML) {
                if (a[1].innerHTML !== "" && a[4].innerHTML !== "" && a[7].innerHTML !== "") {
                    yay = true;
                    statement.innerHTML = player + " is Winner!";
                }
            }
            if (a[2].innerHTML === a[5].innerHTML && a[5].innerHTML === a[8].innerHTML) {
                if (a[2].innerHTML !== "" && a[5].innerHTML !== "" && a[8].innerHTML !== "") {
                    yay = true;
                    statement.innerHTML = player + " is Winner!";
                }
            }
            if (a[0].innerHTML === a[4].innerHTML && a[4].innerHTML === a[8].innerHTML) {
                if (a[0].innerHTML !== "" && a[4].innerHTML !== "" && a[8].innerHTML !== "") {
                    yay = true;
                    statement.innerHTML = player + " is Winner!";
                }
            }
            if (a[2].innerHTML === a[4].innerHTML && a[4].innerHTML === a[6].innerHTML) {
                if (a[2].innerHTML !== "" && a[4].innerHTML !== "" && a[6].innerHTML !== "") {
                    yay = true;
                    statement.innerHTML = player + " is Winner!";
                }
            }
        }
    }
}
f1()
f2()