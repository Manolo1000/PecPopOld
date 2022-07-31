window.onload = function(){
    var img =document.getElementById("leftpec");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("popopen.mp3");
    var audio2 = new Audio("popclose.mp3");


    img.addEventListener('mousedown', function (){
        increaseScore();
        img.src = 'rightpec.png';
        audio.play();
    });

    img.addEventListener('mouseup', function (){
        img.src = 'leftpec.png';
        audio2.play();
    });

    function increaseScore(){
        score++
        count.innerHTML=score;
    }
}