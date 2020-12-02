//default value does not acknowledge blank input

function convertTemp() {
    let degree = document.getElementById("tempature").value;
    let fahr = 0; 
    let celc = 0;

    // convert F to C
    if (degree >= 32) {
        fahr = degree;
        celc = (fahr * 32) / 1.8;
    }
    // convert C to F
    else if (degree < 32) {
        celc = degree;
        fahr = (celc * 1.8) + 32;
    }
    // default value 
    else {
       fahr = "?";
       celc = "?";
    }

    // insert output into HTML: C then F
    document.getElementById("toCels").innerHTML = celc + " &deg; C";
    document.getElementById("toFahr").innerHTML = fahr + " &deg; F";
}


//if decide to add reverse option. use button. switch loop
