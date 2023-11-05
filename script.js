function tempCheck() {
    let vastaus = document.getElementById("output");
    let tempInput = document.getElementById('tempInput').value;
    let tempMode = document.getElementById('tempConv');
    let temDecimals = document.querySelector('input[name="decimal"]:checked').value;

    // console.log(tempInput);

    if (tempInput == "") {
        vastaus.innerHTML = `Syöte ei voi olla tyhjä`;
        return;

    } else if (isNaN(tempInput)) {
        vastaus.innerHTML = `Syötteen on oltava luku`;
        return;

    } else {
        if (tempMode.value == "toFahrenheit") {
            // console.log("Convert to Fahrenheit");
            // console.log(((tempInput * 1.8) + 32).toFixed(2));
            let temp = ((tempInput * 1.8) + 32)
            if (temp.toFixed(2) >= -459.67) {
                vastaus.innerHTML = `Muunnettu lämpötila on: ${temp.toFixed(temDecimals)} &degF`;
            } else {
                vastaus.innerHTML = `Muunnettu lämpötila on alle absoluuttisen nollapisteen (-273.15 &degC)`;
            }

        } else {
            // console.log("Convert to Celscius");
            // console.log(((tempInput - 32) / 1.8));
            let temp = ((tempInput - 32) / 1.8)
            if (temp.toFixed(2) >= -273.15) {
                vastaus.innerHTML = `Muunnettu lämpötila on: ${temp.toFixed(temDecimals)} &degC`;
            } else {
                vastaus.innerHTML = `Muunnettu lämpötila on alle absoluuttisen nollapisteen (-459.7 &degF)`;
            }
        }
    }
}
