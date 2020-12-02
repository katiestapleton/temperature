// author: Katie Stapleton, 12/02/2020

function convertTemp() {
    let degree = document.getElementById("tempature").value;
    let buttonF2C = document.getElementById("buttonF2C").checked;
    let buttonC2F = document.getElementById("buttonC2F").checked;
    let fahr = 0; 
    let cels = 0;
    

        // convert F to C
        if (buttonF2C) {
            fahr = degree;
            cels = (fahr - 32)* (5/9);
        }
        // convert C to F
        else (buttonC2F) {
            cels = degree;
            fahr = (cels * 1.8) + 32;
        }
    }

    // insert output: Celsius and Fahrenheit
    document.getElementById("toCels").innerHTML = cels + " &deg; C";
    document.getElementById("toFahr").innerHTML = fahr + " &deg; F";
}
