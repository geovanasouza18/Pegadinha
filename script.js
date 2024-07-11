function showMessage(isCorrect, element) {
    if (isCorrect) {
        var modal = document.getElementById("myModal");
        var modalMessage = document.getElementById("modalMessage");
        var span = document.getElementsByClassName("close")[0];

        modalMessage.textContent = 'Parabéns! Você escolheu a irmã certa!';
        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Show confetti
        showConfetti();

    } else {
        var img = element.querySelector('img');
        element.classList.add('wrong');

        setTimeout(function() {
            element.classList.remove('wrong');
        }, 500);
    }
}

function showConfetti() {
    var canvas = document.getElementById('confettiCanvas');
    canvas.style.display = 'block';
    var context = canvas.getContext('2d');

    var colors = ['#ff0', '#0f0', '#f00', '#00f', '#ff00ff', '#00ffff'];

    function drawConfettiPiece(x, y, size, color) {
        context.fillStyle = color;
        context.fillRect(x, y, size, size);
    }

    function animateConfetti() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < 100; i++) {
            drawConfettiPiece(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 10, colors[Math.floor(Math.random() * colors.length)]);
        }
    }

    var confettiInterval = setInterval(animateConfetti, 100);

    setTimeout(function() {
        clearInterval(confettiInterval);
        canvas.style.display = 'none';
    }, 3000);
}

window.addEventListener('resize', function() {
    var canvas = document.getElementById('confettiCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Initialize canvas size
window.dispatchEvent(new Event('resize'));
