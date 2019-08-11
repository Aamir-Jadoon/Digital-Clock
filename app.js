var tickElement = document.querySelectorAll('.tick');

function getTime() {
    $(document).ready(function () {
        let date = new Date();

        // time
        let hours = date.getHours() == 0 ? 12 : date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        let ampm = date.getHours() < 12 ? 'AM' : 'PM';

        // modifying html content
        $('.hours>span').html(hours);
        $('.minutes>span').html(minutes);
        $('.seconds>span').html(seconds);
        $('.ampm>span').html(ampm);
    });
}


setInterval(() => {
    getTime();
}, 1000);

// change tick colors
var tickd = 0;

function tick() {

    if (tickd % 2 == 0) {

        // white
        tickElement.forEach(element => {
            element.classList.remove('black')
            element.classList.add('.white');
        });

    } else if (tickd % 2 != 0) {

        // black
        tickElement.forEach(element => {
            element.classList.remove('white')
            element.classList.add('black');

        });

    }
}

setInterval(() => {
    tickd++;
    tick();
}, 500);