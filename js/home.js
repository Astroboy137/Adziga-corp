const spin_box = document.getElementById('circle');

function spin(){
    console.log(1)
    var x = 0;
    loop()
    function loop(){
        setTimeout(() => {
            console.log(x)
            spin_box.style.transform = 'rotateZ('+x+'deg)'
            x += 10
            if (x < 1000){loop()}
        }, 50);
    
    }
}