document.addEventListener('DOMContentLoaded', function() {
    const semaforoImg = document.getElementById('semaforoImg');
    const images = {
        red: 'red.png',
        yellow: 'yellow.JPG',
        green: 'green.JPG'
    };
    let currentState = 'red';

    function changeLight() {
        if (currentState === 'red') {
            currentState = 'green';
            semaforoImg.src = images.green;
        } else if (currentState === 'green') {
            currentState = 'yellow';
            semaforoImg.src = images.yellow;
        } else if (currentState === 'yellow') {
            currentState = 'red';
            semaforoImg.src = images.red;
        }
    }

    setInterval(changeLight, 3000); // Cambia la luz cada 3 segundos
});
