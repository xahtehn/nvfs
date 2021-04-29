function numGen() {
    let luckyNumbers = [];
    let parentNode = document.querySelector("#nums");
    while (luckyNumbers.length < 6) {
        let r = Math.floor(Math.random() * 69) +1;
        if (luckyNumbers.indexOf(r) === -1) luckyNumbers.push(r);
        let add = true;
        console.log(r);

        for (let y = 0; y < 69; y++) {
            if (luckyNumbers[y] == luckyNumbers) {
                add = false;
            }
        }
    } console.log(luckyNumbers);
    parentNode.innerHTML = luckyNumbers.join(" - ");
};