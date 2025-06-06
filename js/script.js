document.addEventListener('DOMContentLoaded', function() {
    const lampSwitch = document.getElementById('lampSwitch');
    const lamp = document.querySelector('.lamp');
    const lampLight = document.querySelector('.lamp-light');
    const statusText = document.getElementById('status');
    const body = document.body;
    
    lampSwitch.addEventListener('change', function() {
        if (this.checked) {
            // Ligar a lâmpada
            lamp.classList.add('on');
            statusText.textContent = 'Muito Melhor';
            statusText.classList.add('on');
            body.classList.add('on');
        } else {
            // Desligar a lâmpada
            lamp.classList.remove('on');
            statusText.textContent = 'Liga ai que ta um Breu';
            statusText.classList.remove('on');
            body.classList.remove('on');
        }
    });
});