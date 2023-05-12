function getFlag() {
    //button is clicked

    $('#getFlag').click(function () {
        console.log('button is clicked')

        randomNo = Math.floor(Math.random() * (5)) + 1;
        filename = `./img/flag${randomNo}.png`
        document.getElementById('image').src = filename;


    })
}

$(document).ready(function () {
    getFlag();
})