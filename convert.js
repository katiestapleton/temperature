function convertTemp() {
    let degree = document.getElementById("convertTemp").value;
    let fahr = 0; 
    let celc = 0;


    // convert F to C
    if (degree >= 32) {
        fahr = degree;
        celc = (fahr * 32) / 1.8;
    }
    // convert C to F
    else {
        celc = degree;
        fahr = (celc * 1.8) + 32;
    }
    
    // insert output into HTML: C then F
    document.getElementById("toCels").value = celc;
    document.getElementById("toFahr").innerHTML = fahr;
}


//if decide to add reverse option. use button. switch loop
